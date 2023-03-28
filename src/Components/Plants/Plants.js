import './Plants.css'
import PlantCard from '../PlantCard/PlantCard'

const Plants = () => {
  return (
    <section className="plants-page">
      <h1 className='plants-title'>90210 Fruits and Vegetables</h1>
      <section className='plants-display-grid' >
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        {/* This is going to eventually be the mapped out plants */}
      </section>
    </section>
  )
}

export default Plants