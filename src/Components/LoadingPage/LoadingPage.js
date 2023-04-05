import './LoadingPage.css'
import LoadingCard from '../LoadingCard/LoadingCard'
import sunflower from '../../Images/sunflowergrow.gif'

const LoadingPage = () => {
  return (
    <section className='loading-page' >
      <img className='sunflower-gif' src={sunflower} />
      <section className='loading-cards-grid' >
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </section>
    </section>
  )
}

export default LoadingPage