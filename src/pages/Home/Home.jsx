// Home.jsx
import { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "../../components/Nav/Nav";
import Input from "../../components/Input/Input";
import HotelsResults from "../../components/HotelsResults/HotelsResults";
import RestaurantsResults from "../../components/RestaurantsResults/RestaurantsResults";
import PlaceholderImage from "../../components/PlaceholderImage/PlaceholderImage";

const Home = () => {
  const [submittedInput, setSubmittedInput] = useState("");

  const handleSubmit = (input) => {
    setSubmittedInput(input);
  };
  return (
    <>
      <Nav />
      <Input onSubmit={handleSubmit} />
      <HotelsResults submittedInput={submittedInput} />
      <RestaurantsResults submittedInput={submittedInput} />
    </>
  );
};

export default Home;

// vilma conditional rendering of place holder image
// {
//   submittedInput ? (
//     <>
//       <HotelsResults submittedInput={submittedInput} />
//       <RestaurantsResults submittedInput={submittedInput} />
//     </>
//   ) : (
//     <PlaceholderImage />
//   );
// }
