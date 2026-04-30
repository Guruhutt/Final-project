import "./Articles.css";
import { useState } from "react";
import ArticleCard from "./ArticleCards";

function Articles({
  searchResults,
  savedArticles,
  setSavedArticles,
  api,
  isLoggedIn,
}) {
  const [isLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  if (isLoading) {
    return <div className="circle-preloader"> Loading...</div>;
  }
  return (
    <div className="articles">
      <h2 className="articles__header">Search Results</h2>
      <div className="articles__container">
        {searchResults.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <button
        onClick={() => setVisibleCount(visibleCount + 3)}
        className="article__load-btn"
      >
        Load More
      </button>
    </div>
  );
}
