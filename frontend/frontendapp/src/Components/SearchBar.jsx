

import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search products by name"
    />
  );
};

export default SearchBar;
