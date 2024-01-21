class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(clickEvent) {
    this._clickEvent = clickEvent;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <svg width="30" height="30" fill="currentColor"
      class="absolute left-0 mt-3 ml-3 text-white pointer-events-none group-focus-within:text-blue-500"
      aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg>
    <input
      class="focus:ring-2 bg-slate-800 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-white placeholder-white rounded-md py-2 pl-10 ring-1 ring-slate-800 shadow-sm my-2"
      type="text" id="searchElement" aria-label="Filter projects" placeholder="Filter projects...">
    <div class="py-1 ml-2">
      <button id="search-button"
        class="hover:bg-blue-400 group flex items-center rounded-md bg-slate-500 text-white text-base font-semibold pl-2 pr-2 py-2 shadow-sm">
        Search
      </button>
    </div>
    `;
    this.className = `relative flex h-14 items-center`

    this.querySelector("#search-button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", Search);