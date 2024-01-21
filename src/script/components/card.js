import "./card-items.js";
class Card extends HTMLElement {
  set movies(movies) {
    this._movies = movies
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "w-full gap-5 grid grid-cols-4 mt-4 tag"
    this._movies.forEach(movie => {
      const movieItem = document.createElement("card-item");
      movieItem.movie = movie;
      this.appendChild(movieItem);
    });
  }
}

customElements.define("card-list", Card);