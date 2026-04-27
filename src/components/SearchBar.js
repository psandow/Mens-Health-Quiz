import React from 'react';
import './SearchBar.css';
import './Hero.css';

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="search-banner">
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="material-symbols-outlined search-icon">search</span>
          <input 
          type="text" 
          className="search-input" 
          placeholder={placeholder} 
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
