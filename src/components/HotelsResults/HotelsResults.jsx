import React, { useState, useEffect } from "react";
import "./HotelsResults.css";

const HotelsResults = ({ submittedInput }) => {
  const [hotels, setHotels] = useState([]);
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

        // Hotel data
        const hotelsData = await hotelsResponse.json();
        setHotels(hotelsData.results || []);
        console.log(hotelsData.results);

        // Old Fetch hotel images
        const hotelImagesResponse = await fetch(
          `https://api.foursquare.com/v3/places/${hotelsData.results[0].fsq_id}/photos`,
          options
        );
        const hotelImagesData = await hotelImagesResponse.json();
        console.log(hotelImagesData);

        // Old test image console log
        const testPrefix = hotelImagesData[0].prefix;
        const testSuffix = hotelImagesData[0].suffix;
        const testImageUrl = `${testPrefix}original${testSuffix}`;
        console.log(testImageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (submittedInput) {
      searchFunc();
    }
  }, [submittedInput]);
  return (
    <div className="results-container hotels-results">
      <h1>Hotels Results</h1>
      <p>{submittedInput}</p>
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
      </div>
    </div>
  );
};

export default HotelsResults;

// import React, { useState, useEffect } from "react";
// import "./HotelsResults.css";

// const HotelsResults = ({ submittedInput }) => {
//   const [hotels, setHotels] = useState([]);
//   const [hotelImages, setHotelImages] = useState([]);

//   console.log(hotelImages);

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

//         // Hotel data
//         const hotelsData = await hotelsResponse.json();
//         setHotels(hotelsData.results || []);
//         console.log(hotelsData.results);

//         // Fetch hotel images for each hotel
//         const imagePromises = hotelsData.results.map(async (hotel) => {
//           const hotelImagesResponse = await fetch(
//             `https://api.foursquare.com/v3/places/${hotel.fsq_id}/photos`,
//             options
//           );
//           const hotelImagesData = await hotelImagesResponse.json();
//           return hotelImagesData;
//         });

//         const allHotelImages = await Promise.all(imagePromises);
//         setHotelImages(allHotelImages);
//         console.log(allHotelImages);

//         // Logging each image URL
//         allHotelImages.forEach((images, index) => {
//           const firstImage = images[0];
//           if (firstImage) {
//             const imageUrl = `${firstImage.prefix}original${firstImage.suffix}`;
//             console.log(`Hotel ${index + 1} Image URL: ${imageUrl}`);
//           }
//         });
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
