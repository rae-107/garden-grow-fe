import "./PlantCard.css"

const PlantCard = ({ id, name, img}) => {
  return(
    <div className="plant-card">
      <img alt={`Click for more information about ${name}`} src={`../../Assets/${img}`} className="card-image" ></img>
      <h2 className="card-title">{name}</h2>
      <button className="update-my-garden-button" >+ to my garden</button>
    </div>
  )
}

export default PlantCard