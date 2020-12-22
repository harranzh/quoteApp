const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const moment = require('moment');
const Quote = require('./model/quotes');
const User = require('./model/users');
const rateLimit = require("express-rate-limit");
// const uuidAPIKey = require('uuid-apikey');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const initializePassport = require('./passport-config');

initializePassport(passport, email => {
  return User.findOne({ email : email })
});

// const hash = require('pbkdf2-password')();
const dateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8, // start blocking after 8 requests
    message: "Total number of requets exceeded, try again in one hour."
});

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/WeeklyQuotes', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : true }, 
    console.log('Mongo Connection OPEN'));

// config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: 'very secret',
  resave: false, // don't save session if unmodified
  saveUninitialized: false // don't create session until something stored
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
//  apply to all date requests
app.use('/date/', dateLimiter);

app.get('/', checkAuthenticated, function(req, res){
  res.render('getDate/date.ejs');
});

app.get('/login', checkNotAuthenticated, function(req, res){
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/date',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', checkNotAuthenticated, function(req, res){
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async function(req, res){
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      var user_instance = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
      });
      user_instance.save(function(error){
          if (error){
              return error
          }
      })
      console.log('user added');
      res.redirect('/login');
  } catch {
      res.redirect('/register');
  }
});

app.delete('/logout', function(req, res){
  req.logOut()
  res.redirect('/login');
});

const visitedQuotes = [];

app.get('/date', checkAuthenticated, function(req, res){
    res.render('getDate/date', {visitedQuotes : visitedQuotes});
});

app.post('/date', urlencodedParser, async function(req, res){
    
    var day = req.body.date;
    var month = req.body.month;

    if (day.length > 0 && month.length > 0){
        // Convert month and date into week of the year
        var week_number = moment().year('2020').month(month).date(day).format('w');
        // find week number in Quote given week_number
        const quotes = await Quote.findOne({ weekNum : week_number});
        // set week number and quote variables
        const weekObtained = quotes.week;
        const quoteOfWeek = quotes.quote;
        // add to quotesObtained array and push
        var quoteObtained = {week : weekObtained, quote : quoteOfWeek};
        visitedQuotes.push(quoteObtained);
    }
    
    res.redirect('/date');
});

// Middlewear functions

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return next()
  } else {
      res.redirect('/login');
  }
}
function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return res.redirect('/')
  }
  next()
}

app.listen(process.env.PORT || 8080, function(){
    console.log('Connection on localhost:8080');
});