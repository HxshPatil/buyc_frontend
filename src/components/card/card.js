// card.js
import React from 'react';
import './card.css';

const Card = ({ car }) => {
  if (!car) {
    return <p>No car available</p>;
  }

  return (
    <div className='card-container'>
      <div className="card-container-front">
        <div className='image-container'>
          <img src={"https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg"} alt={car.manufacturer + ' ' + car.model} />
        </div>
        <div className='card-title'>
          <h3>{car.manufacturer + ' ' + car.model}</h3>
          <b>${car.list_price.toLocaleString()}</b>
        </div>
        <div className='card-body'>
          <p>Year: {car.year}</p>
          <p>Color:<b> {car.colors}</b></p>
          <p>Mileage:<b> {car.mileage} kmpl</b></p>
          <p>Power BHP: {car.power_bhp}</p>
          <p>Max Speed: {car.max_speed} kmph</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
