import './Home.css'
import Form from '../Form/Form'
import NavBar from '../NavBar/NavBar'

const Home = ({ setZipcode, zipcode, loadPlants }) => {
  return(
    <div className='home-container'>
      <NavBar />
      <div className='title-container'>
        <div className='logo-image'></div>
        <h1 className='home-title'>Garden Grow</h1>
      </div>
        <Form 
          zipcode={zipcode} 
          setZipcode={setZipcode} 
          loadPlants={loadPlants}/>
    </div>
  )
}

export default Home