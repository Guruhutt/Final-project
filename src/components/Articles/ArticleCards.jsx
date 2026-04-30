import "./ArticleCards.css";

function ArticleCard({ article }) {
  return (
    <div className="article__card">
      <img
        className="article__image"
        src={article.urlToImage}
        alt={article.title}
      />
      <p className="article__date">{article.publishedAt}</p>
      <h1 className="article__title">{article.title}</h1>
      <p className="article__description">{article.description}</p>
      <p className="article__source">{article.source.name}</p>
    </div>
  );
}

export default ArticleCard;
