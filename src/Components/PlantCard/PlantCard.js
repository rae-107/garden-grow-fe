import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = ({ id, name, img, addToGarden, growzone }) => {
  return (
    <Link to={`${growzone}/${id}`}>
      <div className="plant-card">
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        ></img>
        <h2 className="card-title">{name}</h2>
        <button onClick={()=> addToGarden(id)} className="update-my-garden-button">+ to my garden</button>
      </div>
    </Link>
  );
};

export default PlantCard;
