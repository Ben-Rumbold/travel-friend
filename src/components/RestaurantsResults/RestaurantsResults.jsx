import React, { useState, useEffect } from "react";
import "./RestaurantsResults.css";
import Card from "../Card/Card";
import HeroImage from "../HeroImage/HeroImage";
import RestaurantHeroImage from "/assets/images/hero-restaurants.webp";

const RestaurantsResults = ({ submittedInput }) => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

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

        // console.log("Fetching hotels data...");
        const hotelsResponse = await fetch(`https://api.foursquare.com/v3/places/search?query=restaurants&near=${submittedInput}&sort=POPULARITY`, options);

        const hotelsData = await hotelsResponse.json();
        // console.log("Fetched hotels data:", hotelsData);

        const hotelImagePromises = hotelsData.results.map(async (hotel) => {
          // Fetch hotel images
          // console.log(`Fetching images for hotel ${hotel.fsq_id}...`);
          const hotelImagesResponse = await fetch(`https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos?classifications=food`, options);

          if (!hotelImagesResponse.ok) {
            console.error(`Error fetching images for hotel ${hotel.fsq_id}: ${hotelImagesResponse.status}`);
            return { ...hotel, imageUrl: "" };
          }

          const hotelImagesData = await hotelImagesResponse.json();
          // console.log(
          //   `Fetched images for hotel ${hotel.fsq_id}:`,
          //   hotelImagesData
          // );

          if (hotelImagesData && hotelImagesData.length > 0) {
            const { prefix, suffix } = hotelImagesData[0];
            hotel.imageUrl = `${prefix}original${suffix}`;
          } else {
            hotel.imageUrl = "";
          }
          return hotel;
        });

        // Wait for all hotel images to be fetched
        const hotelsWithImages = await Promise.all(hotelImagePromises);
        setHotels(hotelsWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    if (submittedInput) {
      searchFunc();
    }
  }, [submittedInput]);

  return (
    <>
      {submittedInput ? (
        <div className="results-container resturants-results-container">
          <h1>Restaurants</h1>
          <p className="display-6">{submittedInput}</p>
          {error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            <div className="restaurants-list">
              {hotels.map((hotel, index) => (
                <Card key={index} name={hotel.name} address={hotel.location && hotel.location.formatted_address} image={hotel.imageUrl}></Card>
              ))}
            </div>
          )}
        </div>
      ) : (
        <HeroImage title="Restaurants" subheading="Embark on a journey of taste with our curated list of dining hot-spots" image={RestaurantHeroImage} />
      )}
    </>
  );
};

export default RestaurantsResults;
