const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=25607a3072cf47fce78da43cfa96480b";
class DataSource extends HTMLElement {
  static getMovies(keyword) {
    return fetch(`${BASE_URL}${keyword}?sort_by=popularity.desc&${API_KEY}`)
      .then(response => response.json())
      .then(responseJSON => {
        if (responseJSON) {
          return Promise.resolve(responseJSON.results);
        }
        else {
          return Promise.resolve(`${keyword} is Not found`);
        }
      })
  }

  static searchMovies = (keyword) => {
    return fetch(`${BASE_URL}search/movie?${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(responseJSON => {
        if (responseJSON) {
          return Promise.resolve(responseJSON.results);
        } else {
          return Promise.resolve(`Sorry movie with name ${keyword}`)
        }
      })
  }
  static getGenre(id) {
    return fetch(`${BASE_URL}discover/movie?${API_KEY}&with_genres=${id}`)
      .then(resolve => resolve.json())
      .then(resolveJSON => {
        if (resolveJSON.results) {
          return Promise.resolve(resolveJSON.results);
        } else {
          return Promise.resolve(`sorry genre with id = ${id} not found`);
        }
      });
  }
}

export default DataSource;