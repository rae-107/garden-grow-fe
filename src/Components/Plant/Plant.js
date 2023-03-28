import './Plant.css'

const plantDetails = () => {
  return(
    <main className='plant-details-container'>
      <section className='plant-image-container'>
        <img className='large-plant-img'src='src/Assets/radish.jpg' alt='plant image'/>
      </section>
      <section className='plant-details-text'>
        <h1 className='plant-title'>{plant name here}</h1>
        <p className='plant-description'>{plant description}</p>
        <p className='planting-zone'>{`Plant Zone: ${plant zone data}`}</p>
        <p className='indoor-dates'>{`Indoor Seed Start Dates: ${indoor start data} to ${indoor end data}`}</p>
        <p className='indoor-dates'>{`Outdoor Seedling Planting Dates: ${outdoor seedling start data} to ${outdoor seedling end data}`}</p>
        <p className='indoor-dates'>{`Outdoor Seed Start dates: ${indoor start data} to ${indoor end data}`}</p>
      </section>
    </main>
  )
}