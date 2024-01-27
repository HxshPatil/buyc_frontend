import React from "react";
import "./container.css";
import axios from "axios";
import CarSearch from "../../search/search";
import Fuse from "fuse.js";

const Header = ({ setCars }) => {
  const fuseOptions = {
    keys: ["manufacturer_model"],
  };

  const onSearch = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/search?query=${query}`
      );
      setCars(response.data);
      if (response.data.length === 0) {
        const response = await axios.get(
          "https://buyc-backend-nu.vercel.app/api/all"
        );
        const fuse = new Fuse(response.data.cars, fuseOptions);
        let cars = fuse.search(query).map((result) => result.item);
        setCars(cars);
      }
    } catch (error) {
      console.error("Error fetching cars:", error.message);
    }
  };

  const onClear = async () => {
    try {
      const response = await axios.get(
        "https://buyc-backend-nu.vercel.app/api/all"
      );
      setCars(response.data.cars);
    } catch (error) {
      console.error("Error fetching cars:", error.message);
    }
  };
  return (
    <div className="container">
      <h1>BUYC</h1>
      <CarSearch onSearch={onSearch} onClear={onClear} />
    </div>
  );
};

export default Header;
