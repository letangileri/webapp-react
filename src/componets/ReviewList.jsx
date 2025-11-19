import ReviewCard from "./ReviewCard";

export default function ReviewList({ review }) {
  return (
    <section id="reviews">
      <div className="container">
        {review.map((singleReview) => (
          <ReviewCard key={singleReview.id} singleReview={singleReview} />
        ))}
      </div>
    </section>
  );
}
