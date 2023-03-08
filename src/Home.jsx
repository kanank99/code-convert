import React from 'react';
import Logo from './images/logo_blueprint_cropped-removebg-preview.png';

export default function Home() {
  return (
    <div className='home-content'>
        <img className='home-img' src={Logo} />
        <div className='tagline'>Translate your code between programming languages with ease and more!</div>
      </div>
  )
}
