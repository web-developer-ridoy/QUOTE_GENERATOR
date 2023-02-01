const api = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const Btn1 = document.getElementById('btn1');
const Btn2 = document.getElementById('btn2');

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world" + quote.innerHTML + '---- by' + author.innerHTML, 'tweet window', 'width=600', 'height=300');
}
