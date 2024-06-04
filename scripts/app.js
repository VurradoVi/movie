const APIKEY = '5fe631f5'

const movieSearch = document.getElementById('search_movie');
const searchBtn = document.getElementById('search_btn');
const title = document.getElementById('title')
const result = document.getElementById('result')
const search = document.getElementById('search')
const header = document.getElementById('header')


async function getMovie() {
    movieName = movieSearch.value
    movieSearch.value =''
    let res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${APIKEY}`)
    let list = await res.json()


    if (!movieName.length) {
        return result.innerHTML = `<h4 class="msg">Enter movie on form</h4>`
    } 

    try {
        result.innerHTML = `<div class="card__movie">
        <div class="card__movie-left">
            <img class="poster" src="${list.Poster}" alt="">
            <div class="genre">
            <span>Genre</span>
            <p>${list.Genre}</p>
            </div>

        </div>

        <div class="card__movie-right">
            <h2 class="card-title">${list.Title}</h2>
            <div class="card-line"></div>
            <h3 class="story">Storyline</h3>
            <p class="storyline">${list.Plot}</p>
            <div class="about">
                <div class="aboutflex">
                    <span>Rating</span>
                    <p>${list.imdbRating}</p>
                </div>
                <div class="aboutflex">
                    <span>Release</span>
                    <p>${list.Released}</p>
                </div>
                <div class="aboutflex">
                    <span>Countries</span>
                    <p>${list.Country}</p>
                </div>
                <div class="aboutflex">
                    <span>Writen by</span>
                    <p>${list.Writer}</p>
                </div>
                <div class="aboutflex">
                    <span>BoxOffice</span>
                    <p>${list.BoxOffice}</p>
                </div>
            </div>
        </div>
    </div>`
    } catch (error) {
        result.innerHTML = `<h3 class="msg">Error occured</h3>`;
    }
    title.innerHTML = ''
}


searchBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    while (search.firstChild) {
        header.appendChild(search.firstChild)
    }
    movieSearch.style.marginTop = '0px';
    movieSearch.style.padding = '13px 30px';
    getMovie();

});




