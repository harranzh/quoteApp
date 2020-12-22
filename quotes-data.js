const mongoose = require('mongoose');
const Quote = require('./model/quotes');

mongoose.connect('mongodb://localhost:27017/WeeklyQuotes', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : true }, 
    console.log('Mongo Connection OPEN'));
//Base Case
// {
//     weekNum: ,
//     week: ,
//     quote:
// },

const weeklyQuotes = [
    {
        weekNum: 1,
        week: 'Week 1',
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. – Maya Angelou"
    },
    {
        weekNum: 2,
        week: 'Week 2',
        quote: "The thing about smart people is that they seem like crazy people to dumb people. - Stephen Hawking"
    },
    {
        weekNum: 3,
        week: 'Week 3',
        quote: "If you think you are too small to make a difference, try sleeping with a mosquito. - Dalai Lama"
    },
    {
        weekNum: 4,
        week: 'Week 4',
        quote: "Have no fear of perfection. You'll never reach it. - Salvador Dali"
    },
    {
        weekNum: 5,
        week: 'Week 5',
        quote: "You can change. And you can be an agent of change. - Laura Dern"
    },
    {
        weekNum: 6,
        week: 'Week 6',
        quote: "Hard work and education will take you farther than any government program can ever promise. - Mia Love"
    },
    {
        weekNum: 7,
        week: 'Week 7',
        quote: "Wanting to be a good actor is not good enough. You must want to be a great actor. You just have to have that. - Gary Oldman"
    },
    {
        weekNum: 8,
        week: 'Week 8',
        quote: "Just believe in yourself. Even if you don't, pretend that you do and, at some point, you will. - Venus Williams"
    },
    {
        weekNum: 9,
        week: 'Week 9',
        quote: "The first step is clearly defining what it is you're after, because without knowing that, you'll never get it. - Halle Berry"
    },
    {
        weekNum: 10,
        week: 'Week 10',
        quote: "What gets celebrated gets replicated. - Bradley Cooper"
    },
    {
        weekNum: 11,
        week: 'Week 11',
        quote: "Far and away the best prize that life has to offer is the chance to work hard at work worth doing. - Theodore Roosevelt"
    },
    {
        weekNum: 12,
        week: 'Week 12',
        quote: "You can't do it unless you can imagine it. - George Lucas"
    },
    {
        weekNum: 13,
        week: 'Week 13',
        quote: "Someday, everything will make perfect sense. So for now, laugh at the confusion, smile through the tears, be strong and keep reminding your self that everything happens for a reason. - John Mayer"
    },
    {
        weekNum: 14,
        week: 'Week 14',
        quote: "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity. - Louis Pasteur"
    },
    {
        weekNum: 15,
        week: 'Week 15',
        quote: "Everyone has a plan 'till they get punched in the mouth. - Mike Tyson"
    },
    {
        weekNum: 16,
        week: 'Week 16',
        quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. - Martin Luther King, Jr."
    },
    {
        weekNum: 17,
        week: 'Week 17',
        quote: "I think happiness is overrated. Satisfied, at peace-those would be more realistic goals. - Brad Pitt"
    },
    {
        weekNum: 18,
        week: 'Week 18',
        quote: "Normality is a paved road: It is comfortable to walk, but no flowers grow on it. - Vincent Van Gogh"
    },
    {
        weekNum: 19,
        week: 'Week 19',
        quote: "I don't know what the future may hold, but I know who holds the future.- Ralph Abernathy"
    },
    {
        weekNum: 20,
        week: 'Week 20',
        quote: "You have to learn the rules to be able to know how to break them. - Keira Knightley"
    },
    {
        weekNum: 21,
        week: 'Week 21',
        quote: "All good ideas start out as bad ideas, that's why it takes so long. - Steven Spielberg"
    },
    {
        weekNum: 22,
        week: 'Week 22',
        quote: "Success is a lot like a bright, white tuxedo. You feel terrific when you get it, but then you're desperately afraid of getting it dirty, of spoiling it in any way. - Conan O'Brien"
    },
    {
        weekNum: 23,
        week: 'Week 23',
        quote: "Do as much homework as you can. Learn everybody's job and don't just settle. - Michael B. Jordan"
    },
    {
        weekNum: 24,
        week: 'Week 24',
        quote: "I don't think something is a failure if you put your all into it. I'm a big fan of the saying, Nothing beats a failure but a try.- Regina King"
    },
    {
        weekNum: 25,
        week: 'Week 25',
        quote: "There are those that look at things the way they are, and ask why? I dream of things that never were, and ask why not? - Robert Kennedy"
    },
    {
        weekNum: 26,
        week: 'Week 26',
        quote: "If you don't fall how are you going to know what getting up is like. - Stephen Curry"
    },
    {
        weekNum: 27,
        week: 'Week 27',
        quote: "Don't write what you think people want to read. Find your voice and write about what's in your heart. - Quentin Tarantino"
    },
    {
        weekNum: 28,
        week: 'Week 28',
        quote: "There are two days in the year that we can not do anything, yesterday and tomorrow. - Mahatma Gandhi"
    },
    {
        weekNum: 29,
        week: 'Week 29',
        quote: "Don't let life discourage you; everyone who got where he is had to begin where he was. - Richard L. Evans"
    },
    {
        weekNum: 30,
        week: 'Week 30',
        quote: "If you know you are going to fail, then fail gloriously. - Cate Blanchett"
    },
    {
        weekNum: 31,
        week: 'Week 31',
        quote: "Creativity is intelligence having fun. — Albert Einstein"
    },
    {
        weekNum: 32,
        week: 'Week 32',
        quote: "Life is 10% what happens to us and 90% how we react to it. – Dennis P. Kimbro"
    },
    {
        weekNum: 33,
        week: 'Week 33',
        quote: "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures. – Josiah Gilbert Holland"
    },
    {
        weekNum: 34,
        week: 'Week 34',
        quote: "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. – William James"
    },
    {
        weekNum: 35,
        week: 'Week 35',
        quote: "Even if you’re on the right track, you’ll get run over if you just sit there. – Will Rogers"
    },
    {
        weekNum: 36,
        week: 'Week 36',
        quote: "When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what? – Sydney Harris"
    },
    {
        weekNum: 37,
        week: 'Week 37',
        quote: "Nurture your mind with great thoughts. To believe in the heroic makes heroes. – Benjamin Disraeli"
    },
    {
        weekNum: 38,
        week: 'Week 38',
        quote: "Look at the sparrows; they do not know what they will do in the next moment. Let us literally live from moment to moment. – Mahatma Gandhi"
    },
    {
        weekNum: 39,
        week: 'Week 39',
        quote: "Luck is a dividend of sweat. The more you sweat, the luckier you get. – Ray Kroc"
    },
    {
        weekNum: 40,
        week: 'Week 40',
        quote: "When I let go of what I am, I become what I might be. – Lao Tzu"
    },
    {
        weekNum: 41,
        week: 'Week 41',
        quote: "You may find the worst enemy or best friend in yourself. – English Proverb"
    },
    {
        weekNum: 42,
        week: 'Week 42',
        quote: "Courage is the first of human qualities because it is the quality which guarantees all others. – Winston Churchill"
    },
    {
        weekNum: 43,
        week: 'Week 43',
        quote: "The great thing in this world is not so much where you stand, as in what direction you are moving. – Oliver Wendell Holmes"
    },
    {
        weekNum: 44,
        week: 'Week 44',
        quote: "The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will. – Vince Lombardi"
    },
    {
        weekNum: 45,
        week: 'Week 45',
        quote: "If not us, who? If not now, when? – John F. Kennedy"
    },
    {
        weekNum: 46,
        week: 'Week 46',
        quote: "Don’t worry about failures, worry about the chances you miss when you don’t even try. – Jack Canfield"
    },
    {
        weekNum: 47,
        week: 'Week 47',
        quote: "The only way of finding the limits of the possible is by going beyond them into the impossible. – Arthur C. Clarke"
    },
    {
        weekNum: 48,
        week: 'Week 48',
        quote: "Speak less than you know; have more than you show. – William Shakespeare"
    },
    {
        weekNum: 49,
        week: 'Week 49',
        quote: "The journey of a thousand miles begins with one step. – Lao Tzu"
    },
    {
        weekNum: 50,
        week: 'Week 50',
        quote: "Do not let what you cannot do interfere with what you can do. – John Wooden"
    },
    {
        weekNum: 51,
        week: 'Week 51',
        quote: "Our lives begin to end the day we become silent about things that matter. – Martin Luther King Jr."
    },
    {
        weekNum: 52,
        week: 'Week 52',
        quote: "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself. – Albert Einstein"
    }
]

Quote.insertMany(weeklyQuotes);
    console.log(weeklyQuotes);


