import React from 'react'
import './topbar.scss'
import {Person,Mail} from "@mui/icons-material"

export default function Topbar(props) {

  return (
    <div className={`topbar ${props.menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
            <div className="itemContainer">
              <Person className="icon"/>
                <span>+12 34 56 78</span>

            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
                <span>ankitv3432@gmail.com</span>

            </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={props.handleClickHamburger}>
             <span className='line1'></span>
             <span className='line2'></span>
             <span className='line3'></span>
          </div>
        </div>

      </div>
    </div>
  )
}
