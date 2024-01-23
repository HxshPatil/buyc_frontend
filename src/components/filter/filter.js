// filter.js

import React, { useState } from "react";
import "./filter.css";

const Filter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState("");
  const [mileageRange, setMileageRange] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleFilter = () => {
    // Call the onFilterChange prop to pass the filter criteria to the parent component
    onFilterChange({
      priceRange,
      mileageRange,
      color: selectedColor,
    });
  };

  return (
    <div className="filter">
      <div classname="filter-title">Filters:</div>
      <div className="filter-options">
        <select
          className="filter-select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Select Price Range</option>
          {/* Add price range options */}
        </select>
        <select
          className="filter-select"
          value={mileageRange}
          onChange={(e) => setMileageRange(e.target.value)}
        >
          <option value="">Select Mileage Range</option>
          {/* Add mileage range options */}
        </select>
        <select
          className="filter-select"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Select Color</option>
          {/* Add color options */}
        </select>
        <button onClick={handleFilter} className="btn">Apply</button>
        <button onClick={handleFilter} className="btn">Reset</button>
      </div>
    </div>
  );
};

export default Filter;
