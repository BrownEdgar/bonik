import React from "react";
import "./Clients.scss";










export default function Clients() {

  const [data, setData] = useState([])
  return (
    <div className="Clients">
      <div className="Clients__about">
        <div className="Clients__title">
          <h2>Hear Something From Our Clients</h2>
          <p>
            Need to send something on time? Delivery is process of transporting
            goods from a source location to a predefined destination.
          </p>
        </div>
        <div className="Clients__block">
        <div className="Clients__block-left">
          <img src="./images/girl.jpg" alt="girl" />
          <img src="./images/girl2.jpg" alt="girl2" />
          <img src="./images/girl3.jpg" alt="girl3" />
        </div>
        <div className="Clients__block-right">
          <img src="./images/Vector.png" alt="vector" />
          <img src="./images/stars.png" alt="" />

        </div>
        </div>
      </div>
    </div>
  );
}
