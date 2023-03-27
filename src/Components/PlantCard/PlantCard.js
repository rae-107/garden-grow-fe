import "./PlantCard.css"

const PlantCard = () => {
  return(
    <div className="plant-card">
      <img src={`../../Assets`} className="card-image" ></img>
      <h3>{}</h3>
      <button>+ or - ( depending on state ) to my garden</button>
    </div>
  )
}

export default PlantCard