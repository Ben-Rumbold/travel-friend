// App.jsx
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Input from "./components/Input/Input";
import HotelsResults from "./components/HotelsResults/HotelsResults";
import RestaurantsResults from "./components/RestaurantsResults/RestaurantsResults";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/Nav";
import PlaceholderImage from "./components/PlaceholderImage/PlaceholderImage";


const App = () => {
  const [submittedInput, setSubmittedInput] = useState("");

  const handleSubmit = (input) => {
    setSubmittedInput(input);
  };

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<>
            <Input onSubmit={handleSubmit} />
            {/* Conditionally render PlaceholderImage if no input is submitted */}
            {submittedInput ? (
              <>
                <HotelsResults submittedInput={submittedInput} />
                <RestaurantsResults submittedInput={submittedInput} />
              </>) : <PlaceholderImage />
            }
          </>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



// import React, { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Input from "./components/Input/Input";
// import HotelsResults from "./components/HotelsResults/HotelsResults";
// import RestaurantsResults from "./components/RestaurantsResults/RestaurantsResults";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from "./components/Nav/Nav";
// import PlaceholderImage from "./components/PlaceholderImage/PlaceholderImage";


// const App = () => {
//   const [submittedInput, setSubmittedInput] = useState("");

//   const handleSubmit = (input) => {
//     setSubmittedInput(input);
//   };

//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={<>
//             <Input onSubmit={handleSubmit} />
//             {/* Conditionally render PlaceholderImage if no input is submitted */}
//             {submittedInput ? (
//               <>
//                 <HotelsResults submittedInput={submittedInput} />
//                 <RestaurantsResults submittedInput={submittedInput} />
//               </>
//             ) : <PlaceholderImage />}
//           </>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
