// app.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/card';
import Footer from './components/containing_elements/footer';
import Header from './components/containing_elements/header';
import Filter from './components/filter/filter';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);
  console.log('cars:', cars)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://buyc-backend-nu.vercel.app/api/all');
        setCars(response.data.cars);
      } catch (error) {
        console.error('Error fetching cars:', error.message);
      }
  };
    fetchCars();
  }, []);

  const onFilterChange = async ( mileage, selectedColor,minPrice, maxPrice) => {
    try {
      // console.log("works");
      // console.log(mileage);
      const response = await axios.get(`https://buyc-backend-nu.vercel.app/api/filter?mileage=${mileage}&maxPrice=${maxPrice}&colors=${selectedColor}&minPrice=${minPrice}`);
      setCars(response.data);

    } catch (error) {
      console.error('Error fetching cars:', error.message);
    }
};

  return (
    <div className="App">
      <Header setCars={setCars}/>
      <div className="page">
        <Filter onFilterChange= {onFilterChange}/>
        <div className='car-container'>
          {cars.map((car) => (
          // Pass each car as a prop to the Card component
          <Card car={car} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
