const url = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

let getQuote = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        quote.innerText = data.content;
        author.innerText = data.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
