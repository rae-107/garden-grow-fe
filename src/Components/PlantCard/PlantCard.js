import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = ({ id, name, img, addToGarden, growzone, deleteFromGarden }) => {
  return (
      <div className="plant-card">
    <Link to={`${growzone}/${id}`}>
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        ></img>
        <h2 className="card-title">{name}</h2>
        </Link>
        <button onClick={()=> {
          console.log("button is clicked")
          return addToGarden(id)}
          } onDblClick={()=> {
            return deleteFromGarden(id)
          }} className="update-my-garden-button">+ to my garden</button>
      </div>
  );
};

export default PlantCard;
