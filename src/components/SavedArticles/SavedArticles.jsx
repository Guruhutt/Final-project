import React from "react";
import "../Articles/Articles.css";
import "./SavedArticles.css";

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
              <img className="article-image" src={article.urlToImage} />
              <p className="article-date">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <h1 className="article-source">{article.source.name}</h1>
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
