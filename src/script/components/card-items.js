import starItem from "../../assets/star.png";
class CardItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  get genreId() {
    return this._movie.genre.ids;
  }

  render() {
    this.innerHTML = `
    <div data-id=${this._movie.id} class="tag grid grid-row-3 pr-4 justify-between">
                  <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="object-cover w-full rounded-xl">
                  <p class="text-white break-normal text-xl font-semibold truncate mx-2">
                    ${this._movie.original_title}
                  </p>
                  <div class=" mx-2 w-full flex items-center justify-between">
                    
                      <div class="flex items-center ">
                        <img class="h-6 w-6" src=${starItem}>
                        <p class="text-sm text-white">${this._movie.vote_average}</p>
                      </div>
                      <p class="text-white text-sm">${this._movie.release_date}</p>
                  </div>
                  </div>
    `;
    this.className = "h-82  cursor-pointer"
  }
}

customElements.define("card-item", CardItem);