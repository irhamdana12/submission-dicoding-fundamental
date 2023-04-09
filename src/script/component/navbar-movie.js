class BarMovieApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        *{
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          box-sizing: content-box;
        }
        
        :host{
          align-items: center;
          background: black;
          display: block;
          width: 107%;
        }
        
        .span-parent{
          margin: 0px;
          padding: 30px;
          display: flex;
          font-size: 50px;
          font-weight:bolder;
          letter-spacing: 10px;
          justify-content: center;
        }
        
        span .span-inner{
          font-size: 3rem;
          color: red;
        }
      </style>

      <span class="span-parent"><span class="span-inner">BIOSKOP 77</span></span>
      `;
  }
}
customElements.define("navbar-movie", BarMovieApp);
