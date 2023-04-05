import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";
import { useEffect } from "react";

function PlantCard({ id, name, img,  growzone, addToGarden, deleteFromGarden, savedTitles, userID, createVegetableUser }) {
  const [saveIcon, setSaveIcon] = useState(false)
  // console.log("here is suer id", userID)
  useEffect(() => {
    addSave()
    // checkSaveStatus()
    // addSave()
    // removeSave()
  },[saveIcon])
  
  // const checkSaveStatus = () => {
  //   if(savedTitles.includes(name)) {
  //     setSaveIcon(true)
  //   }
  // }
  
  const addSave = () => {
    return saveIcon ? addToGarden(userID,id) : undefined
  }

  const removeSave = () => {
    return saveIcon ? deleteFromGarden() : undefined
  }

  const handleClick = (status) => {
    setSaveIcon(status)
    addSave()
    // createVegetableUser("7")
    // removeSave()
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
