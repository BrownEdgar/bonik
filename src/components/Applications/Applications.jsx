import React from "react";
import "./Applications.scss";
import ApplicationApp from "../AplicationApp/ApplicationApp";

export default function Applications() {
  return (
    <div className="Applications">
      <div className="Applications__content">
        <div className="Applications__block">
          <h1>Get More With Our Application</h1>
          <p>
            Need to send something on time? Delivery is process of transporting
            goods from a source location to a predefined destination.
          </p>
          <div className="Applications__block-list">
            <div>
              <p>01</p>
              <p>Follow Delivery Status</p>
            </div>
            <div>
              <p>02</p>
              <p>Order From Any Location</p>
            </div>
            <div>
              <p>03</p>
              <p>Get Important Notices</p>
            </div>
          </div>
          <ApplicationApp />
        </div>
        <img src="./images/app_image.png" alt="app_image" />
      </div>
    </div>
  );
}
