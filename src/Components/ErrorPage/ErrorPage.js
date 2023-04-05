import './ErrorPage.css'
import x from "../../Images/x-vector.png"
import { Link } from "react-router-dom";
import sadCauli from '../../Images/sadCauli.png'

const ErrorPage = () => {
  return (
    <section className='error-page' >
      <div className='x-button-container'>
      <Link to="/">
        <img alt='Click to return home' className='x-button' src={x} ></img>
        </Link>
      </div>
      <img alt='A sad cauliflower' src={sadCauli} className='error-image' />
      <h3 className='error-component-message' >404... Oh no! <br/> Looks like this page got lost in the garden.<br/> Let's find you something else to grow!</h3>
    </section>
  )
}

export default ErrorPage