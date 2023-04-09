class ThisMovieDbItem extends HTMLElement {
  set movie(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>    
           .col {
                border: 0;
                padding: 0;
                margin: 25px;
            }

           .card-movie{
                gap: 50px;
                display: inline-flex;
                allign-items: flex-end;
                justify-content: inherit;
            }

           .card {
                border: 0;
                padding: 35px;
                border-radius: 10px;
                cursor: all-scroll;
                background: rgb(255, 255, 255);
                box-shadow: 0 5px 25px rgb(0 0 0 / 25%);
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
           
           .card:hover {
                transform: scale3d(0.90);
            }

           .card img.card-img{
                border-radius: 1px;
                height: 270px;
                width: 270px;
                
            }

           .card .card-body {
                padding: 1.55rem 0 1.55rem 0;
            }

           .card .card-body .card-title {
                font-size: 25px;
            }

           .card .card-body .card-text {
                font-size: 20px;
                font-family: Arial, Helvetica, sans-serif;
            }

            .title-poster {
                flex-direction: column;
                align-items: right;
                font-weight: bolder;
                display: flex;
                gap: 15px;
                
            }

            .tanggal,
            .dilihat,
            .ringkasan{
                font-weight: lighter;
                margin-bottom: 5px;
                font-size: 10px;
                gap: 10px;
                display: inline-block;
                }

        </style>
        
        <div class="col">
            <div class="card card-movie">
            <div class="card-body">
                    <p class="card-text">
                        <span class="tanggal">Tanggal rilis :  ${this._items.release_date}</span>
                        <br>
                        <span class="dilihat">Dilihat : ${this._items.popularity}</span>
                        <br>
                        <span class="ringkasan">Ringkasan : ${this._items.overview}</span>
                    </p>
                </div>
                <div class="title-poster">
                    <h5 class="card-title">${this._items.title}</h5>
                    <img src="https://image.tmdb.org/t/p/w500/${this._items.poster_path}" class="card-img card-img-top" alt="${this._items.name}" />
                </div>
                
            </div>
        </div>`;
  }
}
customElements.define("movie-item", ThisMovieDbItem);
