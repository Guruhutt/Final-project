import "./Articles.css";
import React from "react";

function ArticleCard({
  article,
  setSavedArticles,
  savedArticles,
  searchTerm,
  showKeyword,
  isLoggedIn,
  onLogin,
  isSavedPage = false,
}) {
  const isSaved = savedArticles.some(
    (savedArticle) => savedArticle.url === article.url
  );

  return (
    <div className="article__card">
      <div className="save-wrapper">
  <button
    className={`article__save-button ${
  isSavedPage ? "delete-button" : isSaved ? "saved" : ""
}`}
    type="button"
    onClick={() => {
  
  if (isSavedPage) {
    setSavedArticles((prevArticles) =>
      prevArticles.filter(
        (savedArticle) => savedArticle.url !== article.url
      )
    );
    return;
  }


  if (!isLoggedIn) {
    onLogin();
    return;
  }

      setSavedArticles((prevArticles) => {
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
  ></button>

  
{isSavedPage ? (
  <div className="save-login-popup">
    Remove from saved
  </div>
) : !isLoggedIn ? (
  <div className="save-login-popup">
    Sign in to save articles
  </div>
) : null}


{showKeyword && (
  <div className="article__keyword">
    {article.keywords?.join(", ")}
  </div>
)}

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