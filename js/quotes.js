// 배열 객체
const quotes = [
    {
        quote : "Don't dwell on the past.",
        author : "JongHwan"
    },
    {
        quote : "Believe in yourself.",
        author : "JongHwan"
    },
    {
        quote : "Follow your heart.",
        author : "JongHwan"
    },
    {
        quote : "Seize the day.",
        author : "JongHwan"
    },
    {
        quote : "You only live once.",
        author : "JongHwan"
    },
    {
        quote : "Past is just past.",
        author : "JongHwan"
    },
    {
        quote : "Love yourself.",
        author : "JongHwan"
    },
    {
        quote : "Where there is a will there is a way.",
        author : "Angela Merkel"
    },
    {
        quote : "Don't beat yourself up.",
        author : "JongHwan"
    },
    {
        quote : "Life is a journey",
        author : "Ralph Waldo Emerson"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;