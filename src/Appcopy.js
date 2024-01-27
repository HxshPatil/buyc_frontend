// app.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/card";
// import Footer from "./components/containing_elements/footer";
import Header from "./components/containing_elements/header";
import Filter from "./components/filter/filter";
import axios from "axios";

function App() {
  const [cars, setCars] = useState([]);
  const [colors, setColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [mileage, setMileage] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://buyc-backend-nu.vercel.app/api/all"
        );
        setCars(response.data.cars);
        let new_colors = [];
        for (let car of response.data.cars) {
          console.log(car.colors);
          new_colors.push(car.colors);
        }
        new_colors = new Set(new_colors);
        setColors(Array.from(new_colors));
        setSelectedColors(Array.from(new_colors));
      } catch (error) {
        console.error("Error fetching cars:", error.message);
      }
    };
    fetchCars();
  }, []);

  const onFilterChange = async (
    mileage,
    selectedColors,
    minPrice,
    maxPrice
  ) => {
    setMileage(mileage);
    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
    setSelectedColors(selectedColors);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.mileage >= mileage &&
      car.list_price >= minPrice &&
      car.list_price <= maxPrice &&
      selectedColors.includes(car.colors)
  );

  return (
    <div className="App" style={{ height: "100vh", overflowY: "hidden" }}>
      <Header setCars={setCars} />
      <div className="page">
        <Filter onFilterChange={onFilterChange} colors={colors} />
        <div
          className="car-container"
          style={{ overflowY: "scroll", height: "100vh", width: "100%" }}
        >
          <div>
            {filteredCars.map((car, index) => (
              <li key={index} style={{ display: 'flex', padding: '10px' }}>
                <img className="thumbnail" src={car.image_url} alt={car.model} />
                <div className="car-details">
                  <h3>
                    {car.manufacturer} {car.model}
                  </h3>
                  <div style={{ display:'flex' }}>
                    <div style={{}}>
                      <p>Year: {car.year}</p>
                      <p>Price: ${car.list_price}</p>
                      <p>Color: {car.colors}</p>
                    </div>
                    <div>
                      <p>Mileage: {car.mileage}</p>
                      <p>Power (bhp): {car.power_bhp}</p>
                      <p>Max Speed: {car.max_speed}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
