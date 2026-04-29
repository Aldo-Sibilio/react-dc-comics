function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <img src={comic.thumb} alt={comic.title} />
      <h4>{comic.title}</h4>
    </div>
  );
}
export default ComicCard;

