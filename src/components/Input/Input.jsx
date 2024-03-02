// import React, { useState } from "react";
// import { ReactTyped } from "react-typed";
// import "./Input.css";

// const Input = ({ onSubmit }) => {
//   const [typedInput, setTypedInput] = useState("");

//   const updateTypedInput = (event) => {
//     const typedInputValue = event.target.value;
//     setTypedInput(typedInputValue);
//   };

//   const handleSubmit = () => {
//     onSubmit(typedInput);
//   };

//   return (
//     <>
//       <div className="input-container">
//         <input
//           className="input"
//           type="text"
//           placeholder="Go where your heart desires"
//           value={typedInput}
//           onChange={updateTypedInput}
//         />
//         <button onClick={handleSubmit}>Search</button>
//       </div>
//       <div className="loading-text-container">
//         <p>
//           Loading Images{""}
//           <ReactTyped
//             strings={["..."]}
//             typeSpeed={100}
//             loop
//             backSpeed={20}
//             cursorChar=""
//             showCursor={false}
//           />
//         </p>
//       </div>
//     </>
//   );
// };

// export default Input;

import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./Input.css";

const Input = ({ onSubmit }) => {
  const [typedInput, setTypedInput] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const updateTypedInput = (event) => {
    const typedInputValue = event.target.value;
    setTypedInput(typedInputValue);
  };

  const handleSubmit = () => {
    onSubmit(typedInput);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 2500);
  };

  useEffect(() => {
    return () => {
      setShowLoading(false);
    };
  }, []);

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
      {showLoading && (
        <div className="loading-text-container">
          <p>
            Loading Images
            <ReactTyped
              strings={["..."]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=""
              showCursor={false}
            />
          </p>
        </div>
      )}
    </>
  );
};

export default Input;
