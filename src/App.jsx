import React from 'react'
import { useSelector } from 'react-redux';
import "./App.scss"

export default function App() {
  const cards = useSelector(state => state.whyChooseUs);
  return (
    <div className='App'>
      <div className="container">
      <div className="header">
        <h3>Why Choose Us?</h3>
        <p>Need to send something on time? Delivery is process of transporting goods from a source location to a predefined destination.</p>
      </div>
      <div className="cards">
      {
        cards.map(elem => {
          return (
            <div style={{ backgroundColor: elem.bcColor }} className="card" key={elem.id}>
              <img src={elem.img} />
              <h4>{elem.title}</h4>
              <p>{elem.desc}</p>
            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}
