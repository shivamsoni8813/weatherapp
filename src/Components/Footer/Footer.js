import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerHeading">

            <h3 >WEATHERAPP</h3>
        </div>
        <div className="footer d-flex">
            <ul>
                <li>Home</li>
                <li>Cities</li>
                <li>News</li>
            </ul>
            <ul>
                <li>Contact us</li>
                <li>FAQs</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
