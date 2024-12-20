import { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result.jsx";
import NotFound from "./NotFound.jsx";

function Search() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  function getAllMovies() {
    axios
      .get(APIURL)
      .then((response) => {
        console.log(response.data.results)
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getSearchedMovies() {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="mx-auto max-w-[1200px] shadow-xl p-4 mt-8 rounded-xl">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search your favorite movie here..."
        className="w-full border rounded outline-none p-2 text-slate-600"
      />
      {movies.length > 0 ? <Result movies={movies} /> : <NotFound />}
    </div>
  );
}

export default Search;
