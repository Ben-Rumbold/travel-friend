import React, { useState, useEffect } from "react";
import "./Input.css";

const Input = () => {
  const [typedInput, setTypedInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const updateTypedInput = (event) => {
    const typedInputValue = event.target.value;
    setTypedInput(typedInputValue);
  };

  const handleSubmit = () => {
    setSubmittedInput(typedInput);
  };

  useEffect(() => {
    const searchFunc = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "fsq3wrjkEMRMvGBIa2/fpCLmspitXq47BrMxfAzL0IjHgxU=",
          },
        };

        // Fetch hotels
        const hotelsResponse = await fetch(
          `https://api.foursquare.com/v3/places/search?query=hotel&near=${submittedInput}`,
          options
        );
        const hotelsData = await hotelsResponse.json();
        setHotels(hotelsData.results || []);

        // Fetch restaurants
        const restaurantsResponse = await fetch(
          `https://api.foursquare.com/v3/places/search?query=restaurant&near=${submittedInput}`,
          options
        );
        const restaurantsData = await restaurantsResponse.json();
        setRestaurants(restaurantsData.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (submittedInput) {
      searchFunc();
    }
  }, [submittedInput]);

  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Go where your heart desires"
          value={typedInput}
          onChange={updateTypedInput}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className="test-text-container">
        <p>Typed Input: {typedInput}</p>
        <p>Submitted Input: {submittedInput}</p>
      </div>
      <div>
        <h2>Hotels</h2>
        {hotels.length ? (
          hotels.map((hotel, index) => (
            <div key={index}>
              <p>{hotel.name}</p>
            </div>
          ))
        ) : (
          <p>Loading hotels...</p>
        )}

        <h2>Restaurants</h2>
        {restaurants.length ? (
          restaurants.map((restaurant, index) => (
            <div key={index}>
              <p>{restaurant.name}</p>
            </div>
          ))
        ) : (
          <p>Loading restaurants...</p>
        )}
      </div>
    </>
  );
};

export default Input;
