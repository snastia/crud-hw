const BASE_URL = 'http://localhost:3000/movies';

const btnEl = document.querySelector(".btn-finish")
const formEl = document.querySelector(".form")

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

postMovies({
    title: "Harry Potter",
    genre: "Fantastic",
    director: "Someone",
    year: 1991
}).then(response => console.log(response))