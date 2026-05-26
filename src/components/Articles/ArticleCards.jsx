import "./Articles.css";
import React from "react";
import articles from "./Articles.jsx";

function ArticleCard({ article }) {
  return (
    <div className="article__card">
      <div className="save-wrapper">
        <button className="article__save-button"></button>
      </div>
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
