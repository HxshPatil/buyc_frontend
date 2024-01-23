import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchSearchData } from '../../services';

const useCarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleSearch = async () => {
    let response = await fetchSearchData(searchQuery);
    setResults(response.data);
    setIsFilterApplied(true);
  };

  const resetSearch = () => {
    setResults([]);
    setIsFilterApplied(false);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  // useEffect(() => {
  //   if (isFilterApplied) {
  //     fetchData();
  //   }
  // }, [isFilterApplied, searchQuery]);

  return {
    searchQuery,
    results,
    isFilterApplied,
    handleSearch,
    resetSearch,
    handleSearchChange,
  };
};

export default useCarSearch;
