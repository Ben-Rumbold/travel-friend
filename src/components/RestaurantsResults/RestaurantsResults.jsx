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
        const hotelsResponse = await fetch(
          `https://api.foursquare.com/v3/places/search?query=restaurants&near=${submittedInput}&sort=POPULARITY`,
          options
        );

        const hotelsData = await hotelsResponse.json();
        // console.log("Fetched hotels data:", hotelsData);

        const hotelImagePromises = hotelsData.results.map(async (hotel) => {
          // Fetch hotel images
          // console.log(`Fetching images for hotel ${hotel.fsq_id}...`);
          const hotelImagesResponse = await fetch(
            `https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos?classifications=food`,
            options
          );

          if (!hotelImagesResponse.ok) {
            console.error(
              `Error fetching images for hotel ${hotel.fsq_id}: ${hotelImagesResponse.status}`
            );
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
                <Card
                  key={index}
                  name={hotel.name}
                  address={hotel.location && hotel.location.formatted_address}
                  image={hotel.imageUrl}
                ></Card>
              ))}
            </div>
          )}
        </div>
      ) : (
        <HeroImage
          title="Restaurants"
          subheading="Embark on a journey of taste with our curated list of dining hot-spots"
          image={RestaurantHeroImage}
        />
      )}
    </>
  );
};

export default RestaurantsResults;

//WORKING - with all CITIES!!!!
// import React, { useState, useEffect } from "react";
// import "./HotelsResults.css";

// const HotelsResults = ({ submittedInput }) => {
//   const [hotels, setHotels] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const searchFunc = async () => {
//       try {
//         const options = {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: "fsq3wrjkEMRMvGBIa2/fpCLmspitXq47BrMxfAzL0IjHgxU=",
//           },
//         };

//         // Fetch hotels
//         console.log("Fetching hotels data...");
//         const hotelsResponse = await fetch(
//           `https://api.foursquare.com/v3/places/search?query=hotel&near=${submittedInput}&sort=POPULARITY`,
//           options
//         );

//         const hotelsData = await hotelsResponse.json();
//         console.log("Fetched hotels data:", hotelsData); // Log fetched hotels data

//         const hotelImagePromises = hotelsData.results.map(async (hotel) => {
//           // Fetch hotel images
//           console.log(`Fetching images for hotel ${hotel.fsq_id}...`);
//           const hotelImagesResponse = await fetch(
//             `https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos?classifications=indoor%2Coutdoor`,
//             options
//           );

//           if (!hotelImagesResponse.ok) {
//             console.error(`Error fetching images for hotel ${hotel.fsq_id}: ${hotelImagesResponse.status}`);
//             return { ...hotel, imageUrl: '' }; // Return hotel with no image URL
//           }

//           const hotelImagesData = await hotelImagesResponse.json();
//           console.log(`Fetched images for hotel ${hotel.fsq_id}:`, hotelImagesData); // Log fetched images for each hotel

//           if (hotelImagesData && hotelImagesData.length > 0) {
//             const { prefix, suffix } = hotelImagesData[0];
//             hotel.imageUrl = `${prefix}original${suffix}`;
//           } else {
//             hotel.imageUrl = ''; // Default image or leave as blank
//           }
//           return hotel;
//         });

//         // Wait for all hotel images to be fetched
//         const hotelsWithImages = await Promise.all(hotelImagePromises);
//         setHotels(hotelsWithImages);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//       }
//     };

//     if (submittedInput) {
//       searchFunc();
//     }
//   }, [submittedInput]);

//   return (
//     <div className="results-container hotels-results">
//       <h1>Hotels Results</h1>
//       <p>{submittedInput}</p>
//       {error ? (
//         <p>Error fetching data: {error}</p>
//       ) : (
//         <div className="hotels-list">
//           {hotels.map((hotel, index) => (
//             <div key={index} className="hotel-card">
//               <p className="hotel-name">{hotel.name}</p>
//               <p className="hotel-address">{hotel.location && hotel.location.formatted_address}</p>
//               {hotel.imageUrl && <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelsResults;

//WORKING 1st attempt
// import React, { useState, useEffect } from "react";
// import "./HotelsResults.css";

// const HotelsResults = ({ submittedInput }) => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const searchFunc = async () => {
//       try {
//         const options = {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: "fsq3wrjkEMRMvGBIa2/fpCLmspitXq47BrMxfAzL0IjHgxU=",
//           },
//         };

//         // Fetch hotels
//         const hotelsResponse = await fetch(
//           `https://api.foursquare.com/v3/places/search?query=hotel&near=${submittedInput}`,
//           options
//         );

//         const hotelsData = await hotelsResponse.json();

//         const hotelImagePromises = hotelsData.results.map(async (hotel) => {
//           const hotelImagesResponse = await fetch(
//             `https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos`,
//             options
//           );
//           const hotelImagesData = await hotelImagesResponse.json();
//           if (hotelImagesData && hotelImagesData.length > 0) {
//             const { prefix, suffix } = hotelImagesData[0];
//             hotel.imageUrl = `${prefix}original${suffix}`;
//           } else {
//             hotel.imageUrl = ''; // Default image or leave as blank
//           }
//           return hotel;
//         });

//         // Wait for all hotel images to be fetched
//         const hotelsWithImages = await Promise.all(hotelImagePromises);
//         setHotels(hotelsWithImages);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     if (submittedInput) {
//       searchFunc();
//     }
//   }, [submittedInput]);

//   return (
//     <div className="results-container hotels-results">
//       <h1>Hotels Results</h1>
//       <p>{submittedInput}</p>
//       <div>
//         <h2>Hotels</h2>
//         {hotels.length ? (
//           hotels.map((hotel, index) => (
//             <div key={index}>
//               <p>{hotel.name}</p>
//               {hotel.imageUrl && <img src={hotel.imageUrl} alt={hotel.name} style={{ width: '100px', height: '100px' }} />}
//             </div>
//           ))
//         ) : (
//           <p>Loading hotels...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HotelsResults;
