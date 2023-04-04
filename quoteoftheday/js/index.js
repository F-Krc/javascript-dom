const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
  ];

// Write your Javascriot code here
let usedQuotes = [];

const getRandomQuote = () => {
  
  let copyQuotes = quotes.slice();

  for (let i = 0; i < usedQuotes.length; i++) {
    let usedQuote = usedQuotes[i];
    let index = copyQuotes.indexOf(usedQuote);
    if (index !== -1) {
      copyQuotes.splice(index, 1);
    }
  }

  if (copyQuotes.length === 0) {
    usedQuotes = [];
    copyQuotes = quotes.slice();
  }


  let randomIndex = Math.floor(Math.random() * copyQuotes.length);
  let randomQuote = copyQuotes[randomIndex];


  usedQuotes.push(randomQuote);

  return randomQuote;
}

const displayQuote = () => {
  let quoteText = document.getElementById('quote-text');
  quoteText.textContent = getRandomQuote();
}

const displayFiveQuotes = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(displayQuote, i * 5000);
  }
}

let newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', displayQuote);

let fiveQuotesBtn = document.getElementById('five-quotes-btn');
fiveQuotesBtn.addEventListener('click', displayFiveQuotes);