import React, { useState } from "react";
import "./filter.css";
import { Slider, Checkbox } from "@mui/material";

const Filter = ({ onFilterChange, colors }) => {
  const [price, setPrice] = useState([0, 50000]);
  const [mileage, setMileage] = useState(0);
  const [selectedColors, setSelectedColors] = useState([colors]);

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
  };

  return (
    <div className="filter" style={{ height: "100vh" }}>
      <div className="filter-options">
        <p>
          <h5>Price filter:</h5>
        </p>
        <div className="slider-values">
          <div className="filter1">
            <h6>${price[0]}</h6>
          </div>
          <div>
            <h6>-</h6>
          </div>
          <div className="filter2">
            <h6>${price[1]}</h6>
          </div>
        </div>
        <Slider value={price} min={0} max={50000} onChange={handleChange} />
        <div className="mileage-filter">
          <p>
            <h5>Mileage filter:</h5>
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
            <h5>Color filter:</h5>
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
                  <td >
                    <input
                      type="checkbox"
                      id={color}
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={() => handleCheckboxChange(color)}
                    />
                  </td>
                <td style={{ verticalAlign:'top' }}><label htmlFor={color} style={{ marginLeft: '5px'}}>{color}</label></td>
              </tr>
            ))}
          </table>
          <button onClick={handleFilter} className="btn">
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
