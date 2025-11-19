import { useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
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
      <section className="mb-4">
        <div className="container">
          <div className="row row-cols1 row-cols-md-3 g-4">
            {movies.map((movie) => (
              <div className="col" key={movie.id}>
                <div className="card">
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      className="card-img-top"
                      src={movie.image}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <Link className="btn btn-dark" to={`/movies/${movie.id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn btn-dark mt-5">Load More Films</button>
          </div>
        </div>
      </section>
    </>
  );
}
