import "./Articles.css";
import { useState } from "react";
import React from "react";

const articles = [
  {
    title: "Article 1",
    description: "This is the description for Article 1.",
    url: "https://example.com/article1",
  },
  {
    title: "Article 2",
    description: "This is the description for Article 2.",
    url: "https://example.com/article2",
  },
  {
    title: "Article 3",
    description: "This is the description for Article 3.",
    url: "https://example.com/article3",
  },
];

function Articles({ searchResults }) {
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
            <button className="article-save-button"></button>
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
