import React from "react";
import "./DeliverySection.scss";

export default function DeliverySection() {
  return (
    <div className="DeliverySection">
      <img src="./images/bonik.png" />
      <div className="DeliverySection__info">
        <h2>Apply for Ambassador</h2>
        <p>
          Need to send something on time? Delivery is process of transporting
          goods from a source location to a predefined destination.
        </p>
        <button>Apply now</button>
      </div>
    </div>
  );
}
