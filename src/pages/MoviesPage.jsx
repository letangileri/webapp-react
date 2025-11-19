import { useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
import MovieCard from "../componets/MovieCard";
import MovieList from "../componets/MovieList";
const API_URL = "http://localhost:3000/api/movies";
export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data.movies);
        setMovies(res.data.movies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Movie collection</h1>
          <p className="col-md-8 fs-4">
            View our collection and find your next favorite film!
          </p>
        </div>
      </div>
      <MovieList movies={movies} />
    </>
  );
}
