import DataSource from "../data/dataSource";
import "../components/titlebar";
import "../components/hero-image";
import "../components/genre";
import "../components/search";
import "../components/card";
import imageoppen from "../../assets/oppen2.jpg";
const main = () => {
  const image = document.querySelectorAll(".image");
  const movieListElement = document.querySelector("card-list");
  const searchBar = document.querySelector("search-bar");

  image.forEach((img) => {
    img.setAttribute("src", imageoppen);
  });

  const getMovies = (keyword) => {
    DataSource.getMovies(keyword).then(renderResult)
  }

  const onButtonSearchClicked = () => {
    selectedGenre = [];
    setGenreEvent();
    if (onButtonSearchClicked) {
      console.log(searchBar.value);
      searchMovies(searchBar.value);
    } else {
      getMovies("dicover/movie");
    }
  }

  const searchMovies = async (keyword) => {
    try {
      const results = await DataSource.searchMovies(keyword);
      renderResult(results)
    } catch (error) {
      fallbackResult(error);
    }
  }

  const renderResult = (results) => {
    movieListElement.movies = results
  }

  const movieGenres = (id) => {
    DataSource.getGenre(id).then(renderResult).catch(fallbackResult);
  }

  const fallbackResult = (error) => {
    movieListElement.innerHTML = `
    <h2 class="w-full text-center text-white text-4xl mt-4">sorry movie not found</h2>
    `
  }

  getMovies("discover/movie");

  searchBar.clickEvent = onButtonSearchClicked;

  let selectedGenre = []
  const setGenreEvent = () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach(tag => {
      tag.addEventListener("click", e => {
        let genreid = e.target.id;
        if (selectedGenre.length == 0) {
          selectedGenre.push(genreid)
        } else {
          if (selectedGenre.includes(genreid)) {
            selectedGenre.forEach((id, idx) => {
              if (id == genreid) {
                selectedGenre.splice(idx, 1);
              }
            });
          }
          else {
            selectedGenre.push(genreid);
          }
        }
        console.log(selectedGenre);
        movieGenres(selectedGenre.join(","));
        highlighSelection();
      });
    })
  }
  setGenreEvent();

  const highlighSelection = () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach(tag => {
      tag.classList.remove("bg-blue-500");
    });
    if (selectedGenre.length != 0) {
      selectedGenre.forEach(id => {
        const highlightElement = document.getElementById(id);
        highlightElement.classList.add("bg-blue-400");
        highlightElement.classList.remove("bg-blue-500");
      });
    } else {
      const buttonHighLight = document.querySelectorAll(".button");
      buttonHighLight.forEach(button => {
        button.classList.add("bg-blue-400");
        button.classList.add("bg-blue-500");
      });
    }
  }
}

export default main;