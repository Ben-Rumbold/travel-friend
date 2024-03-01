import React, { useState } from "react";
import "./Input.css";

const Input = ({ onSubmit }) => {
  const [typedInput, setTypedInput] = useState("");

  const updateTypedInput = (event) => {
    const typedInputValue = event.target.value;
    setTypedInput(typedInputValue);
  };

  const handleSubmit = () => {
    onSubmit(typedInput);
  };

  return (
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
  );
};

export default Input;
