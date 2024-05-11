import React, { useState } from "react";
import "./Clients.scss";

const data = [
  {
    id: 1,
    stars: "./images/Stars2.svg",
    desc: "Digital marketing is the component of marketing that utilizes internet and online based digital technologies, platforms to promote products and services.",
    name: "Mrs Mozifa",
    position: "Managing Director",
  },
  {
    id: 2,
    stars: "./images/Stars1.svg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex soluta assumenda rerum, adipisci error? Ratione quos quis eaque numquam. ",
    name: "Mrs Helen",
    position: "CEO",
  },
  {
    id: 3,
    stars: "./images/Stars3.svg",
    desc: "At consectetur, tempore tempora asperiores cum, quisquam officiis perspiciatis quasi illum debitis nisi iure numquam aliquid nostrum et aperiam qui maiores!",
    name: "Mr Ann",
    position: "Managing Director",
  },
];

export default function Clients() {
  const [slider, setSlider] = useState(0);

  const handlePrev = () => {
    setSlider((index) => (index === 0 ? data.length - 1 : index - 1));
  };
  const handleNext = () => {
    setSlider((index) => (index === data.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="Clients">
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
          <div className="Clients__content">
            <img src={data[slider].stars} alt="stars" />
            <h4>{data[slider].desc}</h4>
            <h2>{data[slider].name}</h2>
            <p>{data[slider].position}</p>
          </div>
          <div className="Clients__btn">
            <img src="./images/left.png" alt="" onClick={handlePrev} />
            <img src="./images/right.png" alt="" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
