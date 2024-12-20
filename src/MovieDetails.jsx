import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const APIURL = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`;

  function getMovieDetails() {
    axios
      .get(APIURL)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <>
      <Link
        to={"/"}
        className="inline-block m-4 py-1 px-6 border-2 border-black text-sm font-semibold"
      >
        Home
      </Link>
      <h1>{props.search}</h1>
      <div className="md:flex py-2 px-4 gap-8">
        <img
          src={"https://image.tmdb.org/t/p/w1280" + movieDetails.poster_path}
          alt="img"
          className="w-[300px]"
        />
        <div className="w-[50%]">
          <h1 className="text-2xl font-semibold mb-4">
            Title : {movieDetails.title}
          </h1>
          <h2 className="my-4">Description : {movieDetails.overview}</h2>
          <h2 className="my-4">Rating : {movieDetails.vote_average}</h2>
          <h2 className="my-4">Release date : {movieDetails.release_date}</h2>
          <h2 className="my-4">Adult : {movieDetails.adult ? "Yes" : "No"}</h2>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
