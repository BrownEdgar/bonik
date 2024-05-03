import React from "react";
import "./Booking.scss";
import { info } from "./Booking";

export default function Booking() {
  return (
    <div className="Booking">
      <div className="Booking__cont">
        {info.map((elem) => {
          return (
            <div key={elem.id} className="Booking__cont-info">
              <img src={elem.image} />
              <div>
                <p>{elem.name}</p>
                <h2>{elem.main}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
