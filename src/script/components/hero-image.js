import oppen2 from "../../assets/oppen2.jpg";
class heroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="lg:px-36 sm:px-12">
    <img src=${oppen2} class="object-cover rounded-2xl w-full h-96" alt="fmdb">
    </div>
    `
  }
}

customElements.define("hero-image", heroImage);