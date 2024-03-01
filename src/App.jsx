import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import HotelsResults from "./components/hotels-results/HotelsResults";
import RestaurantsResults from "./components/restaurants-results/RestaurantsResults";

const App = () => {
  const [submittedInput, setSubmittedInput] = useState("");

  const handleSubmit = (input) => {
    setSubmittedInput(input);
  };

  return (
    <>
      <Input onSubmit={handleSubmit} />
      <HotelsResults submittedInput={submittedInput} />
      <RestaurantsResults submittedInput={submittedInput} />
    </>
  );
};

export default App;
