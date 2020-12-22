const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    weekNum:{
        type: Number,
        required: true
    },
    week:{
        type: String,
        required: true
    },
    quote:{
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('Quote', quoteSchema);