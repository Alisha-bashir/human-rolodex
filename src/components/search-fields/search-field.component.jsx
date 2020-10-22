import React from "react";
import "./search-field.styles.css";
const SearchFields = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
// In this component we have destructred some elements to use as a prop in App.js
// Break Things into pieces.
//This is where reusablity comes in..
export default SearchFields;
