import './LoadingPage.css'
import LoadingCard from '../LoadingCard/LoadingCard'

const LoadingPage = () => {
  return (
    <section className='loading-page' >
      <h1 className='loading-gif' >Loading... This will be a cute little growing plant 🥰</h1>
      <section className='loading-cards-grid' >
        <LoadingCard />
        <LoadingCard />
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