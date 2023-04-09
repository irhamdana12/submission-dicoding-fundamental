import "../component/searchbar-movie.js";
import "../component/movie-list.js";
import SourceData from "../data/data-source.js";

const main = () => {
  const listMovieElement = document.querySelector("movie-list");
  const searchBarElement = document.querySelector("searchbar-movie");

  const buttonSearchClicked = async () => {
    try {
      const result = await SourceData.searchMovie(searchBarElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (result) => {
    listMovieElement.movie = result;
  };

  const fallbackResult = (message) => {
    listMovieElement.renderError(message);
  };

  searchBarElement.clickEvent = buttonSearchClicked;
};
export default main;
