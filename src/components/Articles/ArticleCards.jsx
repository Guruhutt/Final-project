import "./Articles.css";
import React from "react";


function ArticleCard({ article, setSavedArticles, savedArticles, searchTerm ,  isLoggedIn })
 { 
  return (
    <div className="article__card">
      <div className="save-wrapper">
         {!isLoggedIn && (
    <span className="save-tooltip">
      Sign in to save articles
    </span>
  )}
        <button  className={`article__save-button ${
    savedArticles.some(
      (savedArticle) => savedArticle.url === article.url
    )
      ? "saved"
      : ""
  }`} type="button"
        onClick={() => {
  setSavedArticles((prevArticles) => {
    const isSaved = prevArticles.some(
      (savedArticle) => savedArticle.url === article.url
    );

    if (isSaved) {
      return prevArticles.filter(
        (savedArticle) => savedArticle.url !== article.url
      );
    }

    return [
  ...prevArticles,
  {
    ...article,
    keywords: [searchTerm],
  },
];
  });
}}
>
</button>
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
