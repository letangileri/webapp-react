import { useParams } from "react-router";
export default function MoviePage() {
  const { id } = useParams();

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 d-flex gap-4">
          <div className="cover col-12 col-sm-5 col-md-4">
            <img
              className="img-fluid"
              src="https://www.w3schools.com/tags/img_girl.jpg"
              alt=""
            />
          </div>
          <div className="details">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="lead">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-4">
        <div className="container">
          <h3>Leave your review</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Your Review
              </label>
              <textarea
                name="review"
                className="form-control"
                id="review"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Your rating
              </label>
              <select name="rating" id="rating" className="form-select">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-dark">
                Submit Review
              </button>
            </div>
          </form>
        </div>
        <hr className="w-25 mx-auto pt-5 my-5" />
      </section>

      <section id="reviews">
        <div className="container">
          <div className="card p-3 mb-3">
            <h4>Giovanni</h4>
            <p>Rich, emotional anf beatifully film</p>
            <div className="vote text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div className="card p-3 mb-3">
            <h4>Giovanni</h4>
            <p>Rich, emotional anf beatifully film</p>
            <div className="vote text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div className="card p-3 mb-3">
            <h4>Giovanni</h4>
            <p>Rich, emotional anf beatifully film</p>
            <div className="vote text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>

          <div className="card p-3 mb-3">
            <h4>Giovanni</h4>
            <p>Rich, emotional anf beatifully film</p>
            <div className="vote text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
