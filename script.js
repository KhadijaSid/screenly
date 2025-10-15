// const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=b46f0c75";

const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieResult = document.getElementById("movie-details");
const movieImg = document.getElementById("movie-img");


async function getMovieData(movieName){
  const res = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=b46f0c75`)
  const data = await res.json();
  if(data.Response === "False"){
    movieResult.innerHTML = "<p class='error'>Movie not found</p>";
    return;
  }

  movieImg.innerHTML = `
  <img src="${data.Poster}" alt="${data.title}">
  `;

  movieResult.innerHTML = `
  <h2>${data.Title}</h2><br>
  <p><strong>Year:</strong> ${data.Year}</p>
  <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p><br>
  <p><strong>Genre:</strong> ${data.Genre}</p>
  <p><strong>Actors:</strong> ${data.Actors}</p>
  <p><strong>Plot:</strong> ${data.Plot}</p>
  `;

}

searchBtn.addEventListener("click", () =>{
  const movieName = movieInput.value.trim();

  if(movieName === ""){
    movieResult.innerHTML = `<p class="error">Please enter a movie first</p>`;
    return;
  }

  getMovieData(movieName);
});
