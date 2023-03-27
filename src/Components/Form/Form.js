import './Form.css'
import { useState, useEffect } from 'react'


const Form = () => {
const [zipCode, setZipCode] = useState('')

const submitZip = event => {
  event.preventDefault()
  //enter API call for all plants 
  clearInputs()
}

const clearInputs = () => {
  setZipCode('')
}

  return(
    <form className='form-container'>
      <input
      type='number'
      min='10000'
      max='99999'
      placeholder='zipcode'
      name='zipCode'
      value={zipCode}
      />
      <button className='form-button' onClick={event => submitZip}>GO</button>
      //Link to plants page rather than button
    </form>  
    )
}

export default Form