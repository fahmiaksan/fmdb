import fmdb from "../../assets/fmdb.png";
class titleBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex justify-start space-x-4 px-36">
    <img src=${fmdb} class="h-7 w-7 object-cover" alt="fmdb">
    <h1 class="text-3xl font-extrabold text-white font-inter">
    FMDB  
    </h1>
    </div>
    `
  }
}
customElements.define("title-bar", titleBar);