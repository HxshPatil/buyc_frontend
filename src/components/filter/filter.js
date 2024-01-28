import React, { useState } from "react";
import "./filter.css";
import { Slider } from "@mui/material";

const Filter = ({ onFilterChange, colors }) => {
  const [price, setPrice] = useState([0, 50000]);
  const [mileage, setMileage] = useState(0);
  const [selectedColors, setSelectedColors] = useState(colors);

  const handleChange = (_, newValue) => {
    setPrice(newValue);
  };

  const handleFilter = () => {
    // Call the onFilterChange prop to pass the filter criteria to the parent component
    onFilterChange(mileage, selectedColors, price[0], price[1]);
  };

  const handleCheckboxChange = (value) => {
    if (selectedColors.includes(value)) {
      // If the option is already selected, remove it
      setSelectedColors(selectedColors.filter((color) => color !== value));
    } else {
      // If the option is not selected, add it
      setSelectedColors([...selectedColors, value]);
    }
  };

  const handleReset = () => {
    setPrice([0, 50000]);
    setMileage(0);
    setSelectedColors(colors);
    onFilterChange(0, colors, 0, 50000);
  };

  return (
    <div className="filter" style={{ height: "100%" }}>
      <div className="filter-options">
        <p>
          <h5>Price range:</h5>
        </p>
        <div className="slider-values">
          <div className="filter1">
            <h6>
              ${price[0].toLocaleString()} - ${price[1].toLocaleString()}
            </h6>
          </div>
        </div>
        <Slider
          value={price}
          min={0}
          max={50000}
          onChange={handleChange}
          step={100}
        />
        <div className="mileage-filter">
          <p>
            <h5>Minimum mileage:</h5>
          </p>
          <input
            classname="filter-input"
            type="number"
            value={mileage}
            min="0"
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>
        <div className="color-filter">
          <p>
            <h5>Colors:</h5>
          </p>
          {/* <input
            classname="filter-input"
            type="text"
            value={selectedColor}
            placeholder="enter color"
            onChange={(e) => setSelectedColor(e.target.value)}
          /> */}
          <table border="0px">
            {colors.map((color) => (
              <tr key={color}>
                <td>
                  <input
                    type="checkbox"
                    id={color}
                    value={color}
                    checked={selectedColors.includes(color)}
                    onChange={() => handleCheckboxChange(color)}
                  />
                </td>
                <td style={{ verticalAlign: "top" }}>
                  <label htmlFor={color} style={{ marginLeft: "5px" }}>
                    {color}
                  </label>
                </td>
              </tr>
            ))}
          </table>
          <button
            onClick={() => {
              setSelectedColors(colors);
            }}
            className="btn"
          >
            Select all
          </button>
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
