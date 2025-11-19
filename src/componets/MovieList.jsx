import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <section className="mb-4">
      <div className="container">
        <div className="row row-cols1 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-dark mt-5">Load More Films</button>
        </div>
      </div>
    </section>
  );
}
