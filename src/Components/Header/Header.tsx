import React from 'react'
import Nest from '../../assets/pngegg.png'
import './Header.css'

function Header() {

  return (
    <div className='header'>
      <img className='nest-image' src={Nest} alt='nest to home page' ></img>
      <div className='title-styling'>
        <h1>AvianAnthems:</h1> 
        <p>Exploring the World Through Birdsong</p>
      </div>
    </div>
  )
}

export default Header;
