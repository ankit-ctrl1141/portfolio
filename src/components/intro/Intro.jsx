import React from 'react'
import './intro.scss'
import { init } from 'ityped'
export default function Intro() {

  const textRef = React.useRef();    //here,it is like, document.querySelector('something')
       

  React.useEffect(() => {            //using this in place of componentDidMount
    console.log(textRef)
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed: 60,
      
      strings : ["Developer", "Designer", "Content Creator"]
    });
  }, []);   //it will run only one time, as dependency array is empty


  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ankit Kumar Verma</h1>
          <h3>Developer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
