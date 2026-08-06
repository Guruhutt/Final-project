import "../Articles/Articles.css";
import "./SavedArticles.css";
import ArticleCard from "../Articles/ArticleCards";
import React from "react";

function SavedArticles({ savedArticles, userData }) {
  return (
    <div className="saved-articles-container">
      <h2>Saved Articles</h2>
      <div className="saved-articles-header">
        <p className="saved-articles-label">Saved articles</p>

        <h2 className="saved-articles-title">
          {userData.name}, you have {savedArticles.length} saved articles
        </h2>

        <p className="saved-articles-keywords">
          By keywords: Nature, Yellowstone, and 2 other
        </p>
      </div>
      {savedArticles.length > 0 ? (
        <ul className="saved-articles-grid">
          {savedArticles.map((article, index) => (
            <li key={index} className="article-card">
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no saved articles.</p>
      )}
    </div>
  );
}

export default SavedArticles;
