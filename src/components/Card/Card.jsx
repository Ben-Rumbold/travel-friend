import "./Card.css";

const Card = ({ name, address, image }) => {
  return (
    <div className="results-card">
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
    </div>
  );
};

export default Card;

// might be useful (previou alternative for card image if error)
("https://via.placeholder.com/300");
