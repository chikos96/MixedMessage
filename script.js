function generateRandomQuote(quote) {
    const randomQuote = Math.floor(Math.random() * quote.length);
    const msg = quote[randomQuote];
    return msg;
}

const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison',
    'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller',
   ' Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step. - Lao Tzu',
'Start where you are. Use what you have. Do what you can. - Arthur Ashe',
'If you can dream it, you can do it. - Walt Disney',
'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale',
'If you fell yesterday, stand up today. - H. G. Wells',
'A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand',
'The key is to keep company only with people who uplift you, whose presence calls forth your best. – Epictetus',
'Be Impeccable with Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. - Don Miguel Ruiz',
'You are never too old to set another goal or to dream a new dream. - Les Brown',
'Opportunity does not knock; it presents itself when you beat down the door. - Kyle Chandler',
'I do not believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be. - Ken Venturi',
'Your talent is Gods gift to you. What you do with it is your gift back to God. - Leo Buscaglia'
];

const results = generateRandomQuote(quotes);
console.log(results);