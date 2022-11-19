import React from 'react'
import Contact from './components/contact/Contact.jsx';
import Intro from './components/intro/Intro.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';

import Topbar from './components/topbar/Topbar.jsx'
import Works from './components/works/Works.jsx';
import './app.scss'
import Menu from './components/menu/Menu.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false) 


  function handleClickHamburger(){
    setMenuOpen((prevState)=>{
           return !prevState;
    })
  }
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} handleClickHamburger={handleClickHamburger} />
      <Menu menuOpen={menuOpen} handleClickHamburger={handleClickHamburger}/>
      <div className="sections">
    
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
       <Testimonials/>
      </div>
    </div>
  );
}

export default App;
