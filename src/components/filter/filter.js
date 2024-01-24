// filter.js

import React, { useState } from "react";
import "./filter.css";


const Filter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleFilter = () => {
    console.log(minPrice);
    // Call the onFilterChange prop to pass the filter criteria to the parent component
    onFilterChange(
      minPrice,
      maxPrice,
      mileage,
      selectedColor,
    );
  };

  const handleReset = () => {
    setMaxPrice('');
    setMinPrice('');
    setMileage('');
    setSelectedColor('');
  };

  return (
    <div className="filter">
      <div classname="filter-title">Filters:</div>
      <div className="filter-options">
          <input type="number" placeholder="minPrice" onChange={(e) => setMinPrice(e.target.value)}></input>
          <input type="number" placeholder="maxPrice" onChange={(e) => setMaxPrice(e.target.value)}></input>
          <input type="number" placeholder="mileage" onChange={(e) => setMileage(e.target.value)}></input>
          <input type="text" placeholder="selectedColor" onChange={(e) => setSelectedColor(e.target.value)}></input>
        <div className="btns">
          <button onClick={handleFilter} className="btn">Apply</button>
          <button onClick={handleReset} className="btn">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
