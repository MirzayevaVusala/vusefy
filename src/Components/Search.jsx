import React, { useState } from "react";
import "./SearchStyles.css";

const Search = ({ data, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    onSearchResults(filteredResults);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
