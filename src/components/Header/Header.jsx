import React from 'react'
import "./Header.scss"

export default function Header() {
  return (
    <div className='Header'>
      <div className="Header__container">
      <div className="Header__container-info">
        <h1>Delivery is Process
            Going From Source Point to Predefined Destination.</h1>
        <p>Need to send something on time? Delivery is process of transporting goods from a source location to a predefined destination.</p>
      <form>
        <input type="text" />
        <button type='submit'></button>
      </form>
      </div>
      <img src="./images/delivery.png"/>
      </div>
    </div>
  )
}
