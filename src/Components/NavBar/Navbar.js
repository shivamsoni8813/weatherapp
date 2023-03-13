import React from 'react'
import './Navbar.css'
const Navbar = ({ handleClickForMove }) => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarWrapper">
          <ul>
            <li> Home </li>
            <li> Cities </li>
            <li> News </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
