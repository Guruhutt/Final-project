import React from "react";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData(searchTerm);
  };

  const fetchData = (searchTerm) => {
    console.log("Searching for:", searchTerm);
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
