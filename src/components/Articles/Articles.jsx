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

function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <div className="circle-preloader"> Loading...</div>;
  }
  return (
    <div className="articles">
      <h2 className="articles-header">Search Results</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.url} className="article-card">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Articles;
