import React from 'react'
import './ApplicationApp.scss'

export default function ApplicationApp() {
  return (
    <div className='ApplicationApp'>
      <a href="https://www.apple.com/app-store/" target="_blank">
        <div className="ApplicationApp__content">
          <i className="bx bxl-apple"></i>
          <div>
            <p>Download on the</p>
            <h2>App Store</h2>
          </div>
        </div>
      </a>
      <a href="https://play.google.com/store/games?hl=ru&gl=US&pli=1" target="_blank">
        <div className="ApplicationApp__content">
          <img src="/icon/google-play.svg" alt="google-play" />
          <div>
            <p>Get it on</p>
            <h2>Google Play</h2>
          </div>
        </div>
      </a>
    </div>
  )
}
