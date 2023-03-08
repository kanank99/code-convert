import './style.css';
import React, { useState } from 'react';
import Converter from './Converter';
import Navbar from './Navbar';
import Home from './Home'

function App() {

  const [component, setComponent] = useState("home")

  return (
    <>
      <Navbar />
      {component == "home" ? <Home /> : null}
      {component == "home" ? <div className='nav-button home-button' onClick={() => setComponent((newComponent) => newComponent = "converter")}>Get Started</div> : null}
      {component == "converter" ? <Converter /> : null}
      
    </>
  );
}

export default App;
