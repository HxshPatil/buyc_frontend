import React, { useState } from "react";
import "./filter.css";
import { Slider } from "@mui/material";

const Filter = ({ onFilterChange }) => {
  const [price, setPrice] = useState([0, 50000]);
  const [mileage, setMileage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (_, newValue) => {
    setPrice(newValue);
  };

  const handleFilter = () => {
    // Call the onFilterChange prop to pass the filter criteria to the parent component
    onFilterChange(mileage, selectedColor, price[0], price[1]);
  };

  const handleReset = () => {
    setPrice([0, 50000]);
    setMileage("");
    setSelectedColor("");
  };

  return (
    <div className="filter">
      <div className="filter-options">
        <p><h5>Price filter:</h5></p>
        <div className='slider-values'>
          <div className='filter1'><h6>${price[0]}</h6></div>
          <div><h6>-</h6></div>
          <div className='filter2'><h6>${price[1]}</h6></div>
        </div>
        <Slider
          value={price}
          min={0}
          max={50000}
          onChange={handleChange}
        />
        <div className="mileage-filter">
        <p><h5>Mileage filter:</h5></p>
        <input classname="filter-input"
          type="number"
          value={mileage}
          placeholder="enter mileage in Kmpl"
          onChange={(e) => setMileage(e.target.value)}
        />
        </div>
        <div className="color-filter">
        <p><h5>Color filter:</h5></p>
        <input classname="filter-input"
          type="text"
          value={selectedColor}
          placeholder="enter color"
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        </div>
        <div className="btns">
          <button onClick={handleFilter} className="btn">
            Apply
          </button>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
