const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f17d23dc0mshc7622b1663347bep13b8e8jsnd60c077fb5b5',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};


const load_data = async() => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    console.error(error);
  }
}


const createImag = (movie) => {
  const imag = movie.primaryImage.url
  const alternativeText = movie.primaryImage.caption.plainText
  const imgElement = document.createElement("img");
  imgElement.src = imag
  imgElement.alt = alternativeText
  return imgElement  
}

load_data()
.then((data) => {
  data.map((movie) => {
    const container = document.createElement("div")
    container.className = "poster-container"

    const imgElement = createImag(movie)
    container.appendChild(imgElement)

    const buttonElement = document.createElement("button")
    buttonElement.textContent = "VER HORARIOS"
    buttonElement.className = "schedules"
    container.appendChild(buttonElement)

    const element = document.getElementById("movie-list");
    element.appendChild(container);
  })
})
