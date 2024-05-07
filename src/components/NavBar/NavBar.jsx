import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className="NavBar__container">
        <img src="./images/logo.png"/>
        <div className="menu">
            <div className="phone">
                <i className='bx bxs-phone' ></i>
                <p>+088 01877576457</p>
            </div>
            <div className="btn login">
                <p>Sign In</p>
            </div>
            <div className="lang">
                <i className='bx bx-globe'></i>
                <p>EN</p>
            </div>
        </div>
      </div>
    </div>
  )
}
