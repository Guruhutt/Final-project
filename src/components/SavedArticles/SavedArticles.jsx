import React from "react";
import ReactDOM from "react-dom/client";
import "./SavedArticles.css";

function SavedArticles( { savedArticles } ) {
  return (
    <div className="saved-articles-container">
      <h2>Saved Articles</h2>
      {savedArticles.length > 0 ? (
        <ul>
          {savedArticles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      ) : (
        <p>You have no saved articles.</p>
      )}
    </div>
  );
}

export default SavedArticles;
