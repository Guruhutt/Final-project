import "./Articles.css";
import { useState } from "react";

const sampleArticle = {
  name: "Sample Article",
  content: "lorem",
  ImageUrl: "url",
  author: "Author Name",
};

function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <div className="circle-preloader"> Loading...</div>;
  }
  return (
    <div className="articles">
      <h2>Articles</h2>
      <p>
        Welcome to the Articles section! Here you'll find a collection of my
        latest writings on various topics including technology, programming, and
        web development. Stay tuned for regular updates and insights!
      </p>
    </div>
  );
}
export default Articles;
