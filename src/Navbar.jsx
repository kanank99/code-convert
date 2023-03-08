import React from 'react'
import Logo from './images/logo_blueprint_cropped-removebg-preview.png';

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-items">
        <li className='logoAndTitle'><img src={Logo} alt='logo_img'></img><h1 className='title'>CodeConvert</h1></li>
        <li>
          <div className='links'>
            <div>Convert</div>
            <div>Explain</div>
            <div>Comment</div>
          </div>
        </li>
        {/* <li>
          <div className='nav-button'>Convert Now</div>
        </li> */}
      </ul>
    </nav>
  )
}
