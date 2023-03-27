import './Home.css'
import Form from '../Form/Form'

const Home = () => {
  return(
    <div className='home-container'>
      <div className='nav-container'></div>
      <div className='title-container'>
        <h1 className='home-title'>Garden Grow</h1>
      </div>
        <Form />
    </div>
  )
}

export default Home