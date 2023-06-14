import React from "react";
import "../style/searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <span className="search">
        <input type="searchbar" placeholder="search song..." />
      </span>
      <span className="search-Area">
        <button type="searchButton">search</button>
      </span>
    </div>
  );
};
export default SearchBar;
