import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  const linkStyle = {
    listStyle: 'none'
  }

  return (
    <div>
      <ul>
        <li style={linkStyle}><Link to="/">Unit Testing App</Link></li>
        <li style={linkStyle}><Link to="/">Home</Link></li>
        <li style={linkStyle}><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Header