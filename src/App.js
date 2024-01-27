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
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://buyc-backend-nu.vercel.app/api/all"
        );
        setCars(response.data.cars);
        let new_colors = [];
        for (let car of response.data.cars) {
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

    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: "Hello from the server!" });
        }, 4000); // Simulate a 2-second delay
      });
    };
    fetchData();

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const toggleHide = () => {
    setHide(!hide);
  };

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

  if (window.innerWidth < 932) {
    return (
      <div className="App" style={{ height: "100%", overflowY: "scroll" }}>
        <Header setCars={setCars} toggleHide={toggleHide} />
        <div className="page">
          {hide && <Filter onFilterChange={onFilterChange} colors={colors} />}

          <div
            className="car-container"
            style={{ overflowY: "scroll", height: "100%", width: "100%" }}
          >
            {cars.length === 0 && <h1>Loading...</h1>}
            <div style={{ minWidth: "400px" }}>
              {filteredCars.map((car, index) => (
                <li key={index} style={{ display: "flex", padding: "10px" }}>
                  <img
                    className="thumbnail"
                    src={car.image_url}
                    alt={car.model}
                  />
                  <div className="car-details">
                    <h3>
                      {car.manufacturer} {car.model}
                    </h3>
                    <div style={{ display: "flex", margin: "10px" }}>
                      <div style={{ textAlign: "start" }}>
                        <p>Year: {car.year}</p>
                        <p>Price: ${car.list_price}</p>
                        <p>Color: {car.colors}</p>
                      </div>
                      <div style={{ textAlign: "start", marginLeft: "10px" }}>
                        <p>Power (bhp): {car.power_bhp}</p>
                        <p>Mileage: {car.mileage}</p>
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
  } else {
    return (
      <React.Suspense fallback={<p>Loading...</p>}>
        <div className="App" style={{ height: "100vh", overflowY: "hidden" }}>
          <Header setCars={setCars} toggleHide={toggleHide} />
          <div className="page">
            {hide && <Filter onFilterChange={onFilterChange} colors={colors} />}
            <div
              className="car-container"
              style={{ overflowY: "scroll", height: "100vh", width: "100%" }}
            >
              {cars.length === 0 && <h1>Loading...</h1>}
              {filteredCars.map((car) => (
                // Pass each car as a prop to the Card component
                <Card car={car} />
              ))}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </React.Suspense>
    );
  }
}

export default App;
