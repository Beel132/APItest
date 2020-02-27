const title = document.getElementsByClassName('title');
const desc = document.getElementsByClassName('desc');
const director = document.getElementsByClassName('director');

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    const data = JSON.parse(this.response)

    for (let i = 0; i < desc.length; i++) {
        desc[i].innerHTML = data[i + 1].description

        title[i].innerHTML = data[i + 1].title

        director[i].innerHTML = data[i + 1].director
    }
}

request.send()