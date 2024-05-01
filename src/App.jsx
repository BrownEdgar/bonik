import React from 'react'
import { useSelector } from "react-redux"
import './App.css'

export default function App() {
  const res = useSelector(state => state.partner)

  return (
    <div className='App'>
      <div className='App__container'>
          <div className='App__context'>
          {
            res.map(elem=>{
              return(
                <div key={elem.id}>
                  <h1>{elem.title}</h1>
                  <span>{elem.desc}</span>
                  <button>Sign Up Now</button>
                </div> 
              )
            })
          }
       
          </div>
      </div>

    </div>
  )
}
