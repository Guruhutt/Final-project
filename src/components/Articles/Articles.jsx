import "./Articles.css";
import { useState } from "react";
import React from "react";

function Articles({ searchResults, savedArticles, setSavedArticles, api }) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  if (isLoading) {
    return <div className="circle-preloader"> Loading...</div>;
  }
  return (
    <div className="articles">
      <h2 className="articles-header">Search Results</h2>
      <div className="articles-container">
        {searchResults.slice(0, visibleCount).map((article) => (
          <div key={article.url} className="article-card">
            <button
              onClick={() => {
                api
                  .saveArticle(article)
                  .then((savedArticle) => {
                    setSavedArticles([...savedArticles, savedArticle]);
                  })
                  .catch((err) => console.error(err));
              }}
              className="article-save-button"
            ></button>
            <img className="article-image" src={article.urlToImage} />
            <p className="article-date">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
            <h1 className="article-source">{article.source.name}</h1>
          </div>
        ))}
      </div>
      <button
        onClick={() => setVisibleCount(visibleCount + 3)}
        className="article-load-btn"
      >
        Load More
      </button>
    </div>
  );
}
export default Articles;
