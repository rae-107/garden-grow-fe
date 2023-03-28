import './Plant.css'

const plantDetails = () => {
  return(
    <main className='plant-details-container'>
      <h1 className='plant-title'>{plant name}</h1>
      <section className='plant-image'>
        <img className='large-plant-img'src='src/Assets/radish.jpg' alt='plant image'/>
      </section>
      <section className='plant-details-text'>
        <p className='plant-description'>{plant description}</p>
      </section>
      <section className='planting-care-container'>
        <h1 className='planting-care-title'>{`Planting Guide for ${plant zone data}`}</h1>
        <p className='indoor-dates'>{`Indoor Seed Start Dates: ${indoor start data} to ${indoor end data}`}</p>
        <p className='outdoor-seedling'>{`Outdoor Seedling Planting Dates: ${outdoor seedling start data} to ${outdoor seedling end data}`}</p>
        <p className='outdoor-seed'>{`Outdoor Seed Start dates: ${indoor start data} to ${indoor end data}`}</p>
        <p className='row-spacing'>{`Row Spacing: ${row spacing}`}</p>
        <p className='seed-spacing'>{`Seed Spacing: ${seed spacing}`}</p>
        <p className='sun-duration'>{`Sun: ${sun}`}</p>
        <p className='weekly-water'>{`Weekly Water: ${water}`}</p>
        <p className='harvest-time'>{`Harvest Time: ${growing duration}`}</p>
      </section>
    </main>
  )
}

export default Plant