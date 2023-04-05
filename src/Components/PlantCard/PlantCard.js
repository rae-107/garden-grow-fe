import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";

function PlantCard({ id, name, img, growzone, createVegetableUser, destroyVegetableUser, destroyId, saveIcon }) {
   // eslint-disable-next-line
  const [currentSaveStatus, setCurrentSaveStatus] = useState(null)
  
  const handleClick = () => {
  if(!saveIcon) {
    setCurrentSaveStatus(true)
    createVegetableUser(id)
    console.log("save is firing")
  } else {
    setCurrentSaveStatus(false)
    destroyVegetableUser(destroyId)
    console.log("delete is firing")
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
