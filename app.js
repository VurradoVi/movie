const APIKEY = '5fe631f5'

const movieSearch = document.getElementById('search_movie');
const searchBtn = document.getElementById('search_btn');
const title = document.getElementById('title')
const result = document.getElementById('result')
const header = document.getElementById('header')
const search = document.getElementById('search')


async function getMovie() {
    movieName = movieSearch.value
    let res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${APIKEY}`)
    let list = await res.json()

    if (!movieName.length) {
        return result.innerHTML = `<h4 class="msg">Enter movie on form</h4>`
    } else {
        title.innerHTML=''
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

}


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    getMovie();
    console.log('btn')
    header.innerHTML =`<div class="search__form-title">
    <input id="search_movie2" class="search__input" type="text" placeholder="Search the film">
    <button id="search_btn2" class="search__btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038ZM4.622,9.311a1,1,0,0,1,2,0A2.692,2.692,0,0,0,9.311,12a1,1,0,0,1,0,2A4.7,4.7,0,0,1,4.622,9.311Z" />
        </svg>
    </button>
</div>`
});




