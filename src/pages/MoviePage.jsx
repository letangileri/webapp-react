import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import ReviewCard from "../componets/ReviewCard";
import ReviewList from "../componets/ReviewList";

const API_URL = "http://localhost:3000/api/movies";
export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        console.log(res.data.thisMovie);
        console.log(res.data.thisMovie.review_);
        setMovie(res.data.thisMovie);
        setReview(res.data.thisMovie.review_);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 d-flex gap-4">
          <div className="cover col-12 col-sm-5 col-md-4">
            <img className="img-fluid" src={movie.image} alt={movie.title} />
          </div>
          <div className="details">
            <h1 className="display-5 fw-bold">{movie.title}</h1>
            <p className="lead">{movie.abstract}</p>
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

      <ReviewList review={review} />
    </>
  );
}
