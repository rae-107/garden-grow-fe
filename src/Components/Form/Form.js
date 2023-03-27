import './Form.css'
import { useState, useEffect } from 'react'


const Form = () => {
const [zipCode, setZipCode] = useState('')

const submitZip = event => {
  event.preventDefault()
  clearInputs()
}

const clearInputs = () => {
  setZipCode('')
}

  return(
    <form className='form-container'>
      <input
      className='input'
      type='number'
      min='10000'
      max='99999'
      placeholder='zipcode'
      name='zipCode'
      onChange={event => setZipCode(event.target.value)}
      />
      <button className='form-button' onClick={event => submitZip}>GO</button>
    </form>  
    )
}

export default Form