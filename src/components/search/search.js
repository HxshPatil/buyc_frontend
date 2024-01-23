import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import useCarSearch from './useCarSearch';
import "./search.css";
import axios from 'axios';

const CarSearch = ({setCars}) => {
  const {
    searchQuery,
    results,
    isFilterApplied,
    handleSearch,
    resetSearch,
    handleSearchChange,
  } = useCarSearch();

  useEffect(()=>{
    console.log('results:', results)
    setCars(results)
  },[results])
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button onClick={handleSearch} className="btn">Apply</button>
        <button onClick={resetSearch} className="btn">Reset</button>
      </div>
    </div>
  );
};

export default CarSearch;
