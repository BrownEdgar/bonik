import React from 'react'
import { useSelector } from "react-redux"
import './Partner.scss'

export default function Partner() {
  const res = useSelector(state => state.partner)

  return (
    <div className='Partner'>
      <div className='Partner__section'>
        <div className='Partner__section-context'>
          {
            res.map(elem => {
              return (
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
