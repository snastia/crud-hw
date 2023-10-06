import filmsTpl from "./films.handlebars"

const BASE_URL = 'http://localhost:3000/movies';

const btnEl = document.querySelector(".btn-finish")
const formEl = document.querySelector(".js-form")
const btnListEl = document.querySelector(".btn-list")
const listEl = document.querySelector(".js-list")

function getMovies(){
    return fetch(`${BASE_URL}`)
    .then(response => response.json())
}

function getMoviesById(id){
    return fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
}

const newMovie = {
    title: "Harry Potter",
    genre: "Fantastic",
    director: "Someone",
    year: 1991
}

function postMovies(newMovie){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    } 
     return fetch(`${BASE_URL}`, options)
    .then(response => response.json())
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const newFilm = {
       title: event.currentTarget.elements.title.value,
       genre: event.currentTarget.elements.genre.value,
       director: event.currentTarget.elements.director.value,
       year: event.currentTarget.elements.year.value
    }
    postMovies(newFilm)
    console.log(newFilm)
})

btnListEl.addEventListener("click", () => {
    getMovies().then(movies => {
        const markup = filmsTpl(movies)
        listEl.insertAdjacentHTML("beforeend", markup)
    })
})