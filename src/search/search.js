import { useState } from "react";
import "./search.css";

const CarSearch = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState("")

  const handleClear = (text) => {
    setQuery(text);
    if (text.length === 0) onClear();
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <div className="search-container">
        <input
          className="input-search"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => handleClear(e.target.value)}
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default CarSearch;
