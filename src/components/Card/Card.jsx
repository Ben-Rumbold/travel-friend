import { motion } from "framer-motion";
import "./Card.css";

const Card = ({ name, address, image }) => {
  return (
    <motion.div
      className="results-card"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 4px 2px rgb(150, 150, 150)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="results-card-img-container">
        <img
          src={image || "https://source.unsplash.com/collection/1028299/?1"}
          alt={name}
        />
      </div>
      <div className="results-card-text-container">
        <h5>{name}</h5>
        <p>{address}</p>
      </div>
    </motion.div>
  );
};

export default Card;

// might be useful (previous alternative for card image if error)
("https://via.placeholder.com/300");
