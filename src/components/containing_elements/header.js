import React from "react";
import "./container.css";
import CarSearch from "../search/search";

const Header = ({setCars}) => {
  return (
    <div className="container">
      <h1>BUYC</h1>
      <CarSearch setCars={setCars}/>
    </div>
  );
};

export default Header;