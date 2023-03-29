import './Home.css'
import Form from '../Form/Form'
import NavBar from '../NavBar/NavBar'

const Home = ({ setPlants }) => {
  return(
    <div className='home-container'>
      <div className='nav-container'>
        <NavBar />
      </div>
      <div className='title-container'>
        <h1 className='home-title'>Garden Grow</h1>
      </div>
        <Form setPlants={setPlants}/>
    </div>
  )
}

export default Home