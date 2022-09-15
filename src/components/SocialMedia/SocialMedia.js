import React, { useState } from 'react'

const SocialMedia = ({name, followersCount}) => {

  const [ country, setCountry] = useState('Canada');

  const handleCountryChange = (event) => {
    // console.log(event.target.value);
    setCountry(event.target.value);
  }

  return (
    <div>
      <h2>Social Media</h2>
      <h3>Testing Props, Events, States, JSX, CSS, Snapshot Testing</h3>
      <p>Top Social Media: </p>
      <p data-testid="topMediaInfo">{name} with {followersCount} Followers</p>

      <label htmlFor="countryInput">Enter Country Name</label>
      <input type='text' placeholder='Enter Country' value={country} 
      onChange={handleCountryChange} id="countryInput"/>
      <p role='paragraph'>Visit Cognizant {country} website to know more</p>
    </div>
  )
}

export default SocialMedia