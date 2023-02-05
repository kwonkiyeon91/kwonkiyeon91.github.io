const quotes = [
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it",
        author: "Henry David Thoreau"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis"
    },
    {
        quote: "life is not fair get used to it.",
        author: "Bill Gates"
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett"
    },
    {
        quote: "To improve is to change; to be perfect is to change often.",
        author: "Winston Churchill"
    },
    {
        quote: "It's not that I'm so smart , it's just that I stay with problems longer.",
        author: "Socrates"
    },
    {
        quote: "Yesterday's home runs don't win today's games.",
        author: "Babe Ruth"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;