import React, { useState, useEffect } from "react";
import "./RestaurantsResults.css";

const RestaurantsResults = ({ searchInput }) => {
  return (
    <div className="results-container Restaurants-results">
      <h1>Restaurants Results</h1>
      <p>{searchInput}</p>
    </div>
  );
};

export default RestaurantsResults;
