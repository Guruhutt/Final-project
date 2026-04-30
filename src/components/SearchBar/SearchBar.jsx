import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearchResults, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="searchBar">
      <div className="searchBar__content">
        <h1 className="searchBar__header">
          What&apos;s going on in the world?
        </h1>
        <p className="searchBar__subheader">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="searchBar__container">
          <input
            className="searchBar__input"
            type="text"
            placeholder="Enter topic"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
          />
          <button
            className="searchBar__btn"
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
