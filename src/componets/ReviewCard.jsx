export default function ReviewCard({ singleReview }) {
  return (
    <div className="card p-3 mb-3">
      <h4>{singleReview.name}</h4>
      <p>{singleReview.text}</p>
      <div>{singleReview.vote}</div>
      <div className="vote text-warning">
        {"★".repeat(singleReview.vote)}
        {"☆".repeat(5 - singleReview.vote)}
      </div>
    </div>
  );
}
