import React from 'react'
import "./portfolioList.scss"
export default function PortfolioList(props) {
  function handleClick(){
    props.setSelected(props.id)
  }
  return (
    <li className= {props.active ? "portfolioList active" : "portfolioList"} onClick={handleClick}>
       {props.title}
    </li>
  )
}
