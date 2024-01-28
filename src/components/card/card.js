// card.js
import React from "react";
import "./card.css";

const Card = ({ car }) => {
  return (
    <div className="card-container">
      <div className="card-container-front">
        <div className="image-container">
          {/* Use the image_url field for the image source */}
          <img src={car.image_url} alt={car.manufacturer + " " + car.model} />
        </div>
        <div className="card-title">
          <h3>{car.manufacturer + " " + car.model}</h3>
          <b>${car.list_price.toLocaleString()}</b>
        </div>
        <div className="card-body">
          <p>Year: {car.year}</p>
          <p>
            Color:<b> {car.colors}</b>
          </p>
          <p>
            Mileage:<b> {car.mileage} kmpl</b>
          </p>
          <p>Power BHP: {car.power_bhp}</p>
          <p>Max Speed: {car.max_speed} kmph</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
