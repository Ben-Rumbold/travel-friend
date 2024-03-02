import "./HeroImage.css";

const HeroImage = ({ title, subheading, image }) => {
  return (
    <div className="hero-img-outer-container">
      <h1>{title}</h1>
      <p>{subheading}</p>
      <div className="hero-image-img-container">
        <img src={image} alt="hero-image" />
      </div>
    </div>
  );
};

export default HeroImage;
