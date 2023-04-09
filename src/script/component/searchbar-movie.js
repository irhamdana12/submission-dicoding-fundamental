class SearchBarMovie extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
       .search-container{
          border-radius: 5px;
          max-width: 1000px;
          background-color: white;
          z-index: 1000;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
          display: flex;
          padding: 5px;
          position: sticky;
          top: 50px;
          margin-button: 35px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
      
       .search-container > input{
        padding: 20px;
        width: 85%;
        font-weight: bold;
        border: 1px;
        border-button: 2px solid white;
       }
      
       .search-container > input:focus{
        border-button 1px solid white;
       }

       .search-container > input:focus::placeholder{
        font-weight: lightner;
       }

       search-container > input::placeholder{
        color: #ff0000;
        font-weight: bolder;
       }

       .search-container > button{
        text-transform: ownercase;
        margin-left: 1%;
        padding: 10px;
        width: 25%;
        cursor: auto;
        border: 10px;
        background: red;
        color: white;
       }

       .search-container:hover > button{
            transform: scale3d(1.07);
       }

       @media screen and (max-width : 550px){
          .search-container{
            position: fixed;
            flex-direction: column-reverse;
            }

          .search-container > input{
            margin-button: 25px;
            width: 150%;
            }
          
            search-container > button{
            width: 125%;
            }
          }
      </style>
       
      <div id="search-container" class="search-container">
           <input placeholder="Telusuri Film" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Cari</button>
       </div>
       `;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("searchbar-movie", SearchBarMovie);
