import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import HotelsResults from "./components/HotelsResults/HotelsResults";
import RestaurantsResults from "./components/RestaurantsResults/RestaurantsResults";

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
