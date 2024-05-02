import React, { useState } from "react";
import "./Questions.scss";

const data = [
  {
    id: 1,
    title: "What is Bonik Delivery?",
    desc: "Bonik delivery is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
  },
  {
    id: 2,
    title: "What kind of services does Bonik Delivery offer?",
    desc: "Bonik delivery is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
  },
  {
    id: 3,
    title: "What is the coverage area of ​​Bonik Delivery?",
    desc: "Bonik delivery is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
  },
  {
    id: 4,
    title: "Want to know about your delivery and logistics charges?",
    desc: "Bonik delivery is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
  },
  {
    id: 5,
    title: "What is Delivery?",
    desc: "Bonik delivery is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
  },
];

export default function Questions() {
  const [isShow, setIsShow] = useState(null);

  const handleClick = (id) => {
    setIsShow(isShow === id ? null : id);
  };
  return (
    <div className="Questions">
      <div className="Questions__content">
        <div className="Questions__title">
          <h1>Still have questions? We have answers!</h1>
          <p>
            Need to send something on time? Delivery is process of transporting
            goods from a source location to a predefined destination.
          </p>
        </div>

        {data.map((elem) => {
          return (
            <div
              className="Questions__list"
              key={elem.id}
              onClick={() => handleClick(elem.id)}
            >
              <i
                className={`bx ${
                  isShow === elem.id ? "bxs-minus-circle" : "bxs-plus-circle"
                }`}
              ></i>
              <div>
                <h2>{elem.title}</h2>
                <p style={{ display: isShow === elem.id ? "block" : "none" }}>
                  {elem.desc}
                </p>
              </div>
            </div>
          );
        })}
        <h3>See all our FAQs</h3>
      </div>
    </div>
  );
}
