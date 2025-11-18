import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">
            Welcome to our Movies Reviews App
          </h1>
          <p className="col-md-8 fs-4">
            Our app provides comprehensive reviews and ratings for the latest
            movies. Explore our collection and find your next favorite film!
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            View Movies
          </button>
        </div>
      </div>
      <section className="mb-4">
        <div className="container">
          <div className="row row-cols1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <Link to="/movies/1">
                  <img
                    className="card-img-top"
                    src="https://www.w3schools.com/tags/img_girl.jpg"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">The boy alone</h5>
                  <Link className="btn btn-dark" to="/movies/1">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/movies/2">
                  <img
                    className="card-img-top"
                    src="https://www.w3schools.com/tags/img_girl.jpg"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">The boy alone</h5>
                  <Link className="btn btn-dark" to="/movies/2">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/movies/3">
                  <img
                    className="card-img-top"
                    src="https://www.w3schools.com/tags/img_girl.jpg"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">The boy alone</h5>
                  <Link className="btn btn-dark" to="/movies/3">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
