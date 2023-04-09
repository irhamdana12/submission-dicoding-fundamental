import "./movie-item.js";

class ListTheMovie extends HTMLElement {
  set movie(items) {
    this._items = items;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this._items.forEach((item) => {
      const theMovieItemElement = document.createElement("movie-item");
      theMovieItemElement.movie = item;
      this.appendChild(theMovieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
      <style>
      .placeholder{
        user-select: none;
        font-weigth:border;
        text-allign: center;
        color: rgb(225, 0, 0);
        display: block;
      }
      </style>`;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}
customElements.define("movie-list", ListTheMovie);
