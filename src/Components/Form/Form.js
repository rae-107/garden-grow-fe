import './Form.css'
import { useState, useEffect } from 'react'


const Form = () => {
const [zipCode, setZipCode] = useState('')

  return(
    <form>
      <input
      type='number'
      placeholder='zipcode'
      name='zipCode'
      value={zipCode}
      />
    </form>  
    )
}

export default Form