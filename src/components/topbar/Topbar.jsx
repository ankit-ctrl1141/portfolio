import React from 'react'
import './topbar.scss'
import {Mail,LinkedIn,Code,GitHub} from "@mui/icons-material"

export default function Topbar(props) {

  return (
    <div className={`topbar ${props.menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>ankit.</a>
            <div className="itemContainer">
              <Mail className="icon"/>
                <span>ankitv3432@gmail.com</span>

            </div>
            <div className="itemContainer">
              <LinkedIn className="icon"/>
                <a href='https://www.linkedin.com/in/ankit-kumar-verma-07a1b5223'  style={{"text-decoration" : "none"}} className="link">LinkedIn</a>

            </div>
            <div className="itemContainer">
              <Code className="icon"/>
                <a href='https://www.hackerrank.com/ankit_official08' style={{"text-decoration" : "none"}}>HackerRank</a>

            </div>
            <div className="itemContainer">
              <GitHub className="icon"/>
              <a href='https://github.com/ankit-ctrl1141' style={{"text-decoration" : "none"}}>GitHub</a>

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
