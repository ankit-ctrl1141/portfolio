import React, { useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data.js';

export default function Portfolio() {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = React.useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio)
    }
  }, [selected])
  // Here our dependency will be [selected], because whenever we are going to change it,then our useEffect is going to run.



  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => {
          return (
            <PortfolioList title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id} />

          )
        })}
      </ul>

      <div className="container">

        {data.map((d) => {
          return (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          )
        })}

      </div>
    </div>
  )
}
