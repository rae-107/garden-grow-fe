import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = ({ id, name, img, addToGarden, growzone, deleteFromGarden, plantAdded }) => {
  return (
      <div className="plant-card">
        <Link to={`/vegetable/${growzone}/${id}`}>
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        ></img>
        <h2 className="card-title">{name}</h2>
        </Link>
        {plantAdded ? 
        <button onClick={()=> addToGarden(id)} className="update-my-garden-button">+ to my garden</button> : <button onClick={()=> deleteFromGarden(id)} className="update-my-garden-button">- from my garden</button>
        }
      </div>
  );
};

export default PlantCard;
