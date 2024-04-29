const joke = document.querySelector('.joke');
const refreshBtn = document.querySelector('.refresh-btn');

const uri = 'https://icanhazdadjoke.com/';
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
    joke.innerHTML= `<h1>${this.responseText}</h1>`;
    console.log(this.responseText);
})

refreshBtn.addEventListener('click', function() {
    xhr.open('GET', uri);
    xhr.setRequestHeader('Accept', 'text/plain');
    xhr.send();
})