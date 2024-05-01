import React from "react";
import "./Applications.scss";

export default function Applications() {
  return (
    <div className="Applications">
      <div className="Applications__content">
        <h1>Get More With Our Application</h1>
        <p>
          Need to send something on time? Delivery is process of transporting
          goods from a source location to a predefined destination.
        </p>
        <div className="Applications__content-list">
          <div className="Applications__content-list-one">
            <p>01</p>
            <p>Follow Delivery Status</p>
          </div>
          <div className="Applications__content-list-two">
            <p>02</p>
            <p>Order From Any Location</p>
          </div>
          <div className="Applications__content-list-three">
            <p>03</p>
            <p>Get Important Notices</p>
          </div>
        </div>

        <div className="app">
          <a href="https://www.apple.com/app-store/" target="_blank">
            <div className="app__content">
              <i className="bx bxl-apple"></i>
              <div className="app__content-left">
                <p>Download on the</p>
                <h2>App Store</h2>
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
            target="_blank"
          >
            <div className="app__content">
              <img src="../icon/google.svg" alt="" />
              <div className="app__content-right">
                <p>Get it on</p>
                <h2>Google Play</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="Applications__image">
        <img src="../image/app_image.png" alt="app_image" />
      </div>
    </div>
  );
}
