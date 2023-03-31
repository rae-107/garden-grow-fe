import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = ({ id, name, img }) => {
  return (
    <Link to="/this will be the details page">
      <div className="plant-card">
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        ></img>
        <h2 className="card-title">{name}</h2>
        <button className="update-my-garden-button">+ to my garden</button>
      </div>
    </Link>
  );
};

export default PlantCard;
