import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";
import { useEffect } from "react";

function PlantCard({ id, name, img,  growzone, addToGarden, deleteFromGarden,  userID, createVegetableUser }) {
  const [saveIcon, setSaveIcon] = useState(false)
  useEffect(() => {
    addSave()
  
  },[saveIcon])
  
  
  
  const addSave = () => {
    return saveIcon ? addToGarden(userID,id) : undefined
  }

  const removeSave = () => {
    return saveIcon ? deleteFromGarden() : undefined
  }

  const handleClick = (status) => {
    setSaveIcon(status)
    addSave()
  }

  const handleDeleteClick = (status) => {
    setSaveIcon(status)
    removeSave()
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
        {saveIcon ? <button onClick={()=> {
          createVegetableUser()
          handleDeleteClick(false)}} className="update-my-garden-button">- to my garden</button> : <button onClick={()=> handleClick(true)} className="update-my-garden-button">+ from my garden</button>
        }
      </div>
  );
}
export default PlantCard;
