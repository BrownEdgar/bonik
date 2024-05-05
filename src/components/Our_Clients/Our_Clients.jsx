import React from 'react'
import "./Our_Clients.scss"

export default function Our_Clients() {
  return (
    <div className='Our_Clients'>
      <div className="Our_Clients__container">
        <h2>Our Clients</h2>
        <div className="Our_Clients-icons">
          <a href=""><img src="./images/google.jpg" alt="" /></a>
          <a href=""><img src="./images/microsoft.jpg" alt="" /></a>
          <a href=""><img src="./images/flickr.jpg" alt="" /></a>
          <a href=""><img src="./images/slack.jpg" alt="" /></a>
          <a href=""><img src="./images/syngenta.jpg" alt="" /></a>
          <a href=""><img src="./images/merck.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
