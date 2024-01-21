import DataGenre from "../data/genre.json";
class Genre extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    let buttonGenre = "";
    DataGenre.genres.map((genre) => {
      buttonGenre += `
      <div class="px-2 py-1 button mr-4 text-base font-semibold cursor-pointer my-2 bg-blue-500 rounded-lg" id=${genre.id}>${genre.name}</div>
      `
    });
    this.className = `text-white tag h-96 text-center flex flex-wrap w-1/4`
    this.innerHTML = buttonGenre;
  }
}

customElements.define("genre-list", Genre);