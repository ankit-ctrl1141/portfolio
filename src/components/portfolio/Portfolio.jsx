import React from 'react'
import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
         <h1>Portfolio</h1>

         <ul>
            <li className='active'>Featured</li>
            <li>Web App</li>
            <li>Mobile App</li>
            <li>Designing</li>
            <li>Branding</li>
         </ul>

         <div className="container">
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="assets/revstudio.jpg" alt="" />
            <h3>Banking App</h3>
          </div>

         </div>
    </div>
  )
}
