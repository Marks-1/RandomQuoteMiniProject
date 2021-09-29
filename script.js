const dailyQuote = () => {
    const quotes = {
        "-Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "-Eleanor Roosevelt": "If life were predictable it would cease to be life, and be without flavor.",
        "-Oprah Winfrey": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "-John Lennon": "Life is what happens when you're busy making other plans. ",
        "-James Cameron": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
        "-Walt Disney": "The way to get started is to quit talking and begin doing.",
    }
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];
    // console.log(authors, author, quote);
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}
dailyQuote();