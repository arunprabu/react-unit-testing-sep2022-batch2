import React, { useState } from 'react'

const ContactForm = () => {

  const [formState, setFormState] = useState({
    firstName: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h2>ContactForm</h2>
      <p>Welcome {formState.firstName}! </p>
      <p>We will contact you over: {formState.phone}</p>
      <form>
        <label htmlFor='nameInput'>Enter Name:</label>
        <input type='text' 
          id="nameInput"
          value={formState.firstName} onChange={handleInputChange}
          name='firstName'/>
        <br />

        <label htmlFor='phoneInput'>Enter Phone:</label>
        <input type='number' 
          id="phoneInput"
          value={formState.phone} 
          name='phone' onChange={handleInputChange}/>
        <br/>

        <button type='submit' onClick={handleSubmit} 
          disabled={formState.firstName === ''}>Submit</button>

      </form>
    </div>
  )
}

export default ContactForm