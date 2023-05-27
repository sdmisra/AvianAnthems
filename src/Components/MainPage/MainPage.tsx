
import React, { Component } from 'react'
import blueBirds from '../../assets/birds 08.png'
import './MainPage.css'

function MainPage() {

  return (
    <>
      <section className='info-container'>
        <img className='blueBirds-image' src={blueBirds} alt='bird'></img>
        {/* <Form /> */}
      </section>
      <footer>footer</footer>
    </>
  )
}

export default MainPage;