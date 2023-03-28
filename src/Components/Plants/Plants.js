import './Plants.css'
import PlantCard from '../PlantCard/PlantCard'
import Form from '../Form/Form'

const Plants = () => {
  return (
    <section className="plants-page">
      <h1 className='plants-title'>90210 Fruits and Vegetables {/* This will be a prop passed down depending if this component is used for results *90210 Fruits and Vegetables* or favorites *My Garden* */}</h1>
      <Form />
      <section className='plants-display-grid' >
        {/* These cards will all have links inside the component on the card image when app is wrapped in BrowserRouter */}
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