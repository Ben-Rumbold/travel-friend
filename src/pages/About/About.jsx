// About.jsx
import React from "react";
import "./About.css";
import Nav from "../../components/Nav/Nav";
import imageMission from "../../assets/images/mission.jpg"; // Import your image file


const About = () => {
  return (
    <>
      <Nav />
      <div className="about_container" >
        <h2>About Us</h2>
        <p>
          Welcome to Travel Friend, your go-to destination for seamless travel experiences! At Travel Friend, we understand that the key to an unforgettable journey lies not only in the destination but also in the comfort and convenience of your
          accommodations and dining choices.
        </p>

        <h3>Our Mission</h3>
        <img src={imageMission} alt="Mission" />
        <p>
          Our mission is to simplify your travel planning by providing a one-stop solution for finding the nearest hotels and restaurants in your desired location. We believe that every traveller deserves a hassle-free experience, and that's exactly
          what we aim to deliver.
        </p>
        <div className="flex-container">
          <div className="card">
            <h3>What We Offer </h3>
            <ul>
              <li>
                <strong>Precision in Location:</strong> We pride ourselves on the accuracy of our search results...
              </li>
              <li>
                <strong>Comprehensive Information:</strong> We go beyond just listing options...
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Navigating through our website is as easy as a breeze...
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>How It Works</h3>
            <ol>
              <li>
                <strong>Search:</strong> Enter your desired location, and let our intelligent search engine do the work for you...
              </li>
              <li>
                <strong>Compare:</strong> Browse through a curated list of the nearest hotels and restaurants...
              </li>
              <li>
                <strong>Book with Confidence:</strong> Once you've made your decision, you can book directly through our platform...
              </li>
            </ol>
          </div>
        </div>
        <h3>Our Commitment to You</h3>
        <p>
          At Travel Friend, we are committed to enhancing your travel experience. Whether you're a solo adventurer, a family on vacation, or a business traveler, we understand the importance of finding the right place to stay and dine. Trust us to be
          your reliable companion in exploring the world.
        </p>

        <p>Thank you for choosing Travel Friend. Let's embark on a journey of discovery together!</p>
      </div>
    </>
  );
};

export default About;
