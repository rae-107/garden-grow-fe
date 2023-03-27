import './Form.css'
import { useState, useEffect } from 'react'


const Form = () => {
const [zipCode, setZipCode] = useState('')

  return(
    <form>
      <input
      type='number'
      min='10000'
      max='99999'
      placeholder='zipcode'
      name='zipCode'
      value={zipCode}
      />
    </form>  
    )
}

export default Form