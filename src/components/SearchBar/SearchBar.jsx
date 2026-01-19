import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import Api from "../utils/api.js";

function SearchBar({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const api = new Api("1d2d4e9986a94988b06ed2fb054cfb49");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData(searchTerm);
  };

  const fetchData = (searchTerm) => {
    api
      .getNews(searchTerm)
      .then((data) => {
        setSearchTerm("");
        console.log("Fetched data:", data);
        onSearchResults(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="search-bar">
      <div className="search-bar-content">
        <h1 className="search-bar-header">What's going on in the world?</h1>
        <p className="search-bar-subheader">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="search-bar-container">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Enter topic"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
          />
          <button
            className="search-bar-btn"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
