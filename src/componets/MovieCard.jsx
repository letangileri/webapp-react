import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="col">
      <div className="card">
        <Link to={`/movies/${movie.id}`}>
          <img className="card-img-top" src={movie.image} alt={movie.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <Link className="btn btn-dark" to={`/movies/${movie.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
