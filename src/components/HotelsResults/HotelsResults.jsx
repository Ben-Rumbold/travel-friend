import React, { useState, useEffect } from "react";
import "./HotelsResults.css";
import Card from "../Card/Card";
import HeroImage from "../HeroImage/HeroImage";
import HotelHeroImage from "/assets/images/hero-hotel.webp";

const HotelsResults = ({ submittedInput }) => {
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
        const hotelsResponse = await fetch(`https://api.foursquare.com/v3/places/search?query=hotel&near=${submittedInput}&sort=POPULARITY`, options);

        const hotelsData = await hotelsResponse.json();
        // console.log("Fetched hotels data:", hotelsData);

        const hotelImagePromises = hotelsData.results.map(async (hotel) => {
          // console.log(`Fetching images/details for hotel ${hotel.fsq_id}...`);

          const hotelDetailsResponse = await fetch(`https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos?`, options);

          const hotelImagesResponse = await fetch(`https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos?classifications=indoor%2Coutdoor`, options);

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
          <h1>Hotels</h1>
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
        <HeroImage title="Hotels" subheading="Explore hidden gems in the world of hospitality with our selection of unique and undiscovered hotels" image={HotelHeroImage} />
      )}
    </>
  );
};

export default HotelsResults;
