import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";

function PlantCard({ id, name, img, growzone, createVegetableUser }) {
  const [saveIcon, setSaveIcon] = useState(false)

const handleClick = () => {
  if(!saveIcon) {
    setSaveIcon(true)
    createVegetableUser(id)
  } else {
    setSaveIcon(false)
  }

}

  return (
      <div className="plant-card">
        <Link to={`/vegetable/${growzone}/${id}`}>
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        />
        <h2 className="card-title">{name}</h2>
        </Link>
        <button className="update-my-garden-button" onClick={(event) => {
          event.preventDefault()
          handleClick()
        }}>
          {saveIcon ? <p>- from my garden</p> : <p>+ to my garden</p>}
        </button>
      </div>
  );
}
export default PlantCard;
