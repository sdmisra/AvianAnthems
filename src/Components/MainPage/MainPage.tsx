
import React, { MouseEvent } from 'react'
import Form from '../Form/Form'
import blueBirds from '../../assets/birds 08.png'
import './MainPage.css'

type MainPageProps = {
  selectedCnt: string,
  selectedType: string,
  fetchResults: (event: MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => void
}

function MainPage( props: MainPageProps ) {

  return (
    <>
      <section className='info-container'>
        <img className='blueBirds-image' src={blueBirds} alt='bird'></img>
        <Form selectedCnt={props.selectedCnt}  selectedType={props.selectedType} fetchResults={props.fetchResults}/>
      </section>
      <footer className='about-us'>
        <span>
        <h4>Joshua Martin</h4>  
        <a href="https://github.com/jmartin777">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/joshua-martin-b57736259/">Linkedin</a>
        </span>
        <span>
          <h4>Shane Misra</h4>
          <a href="https://github.com/sdmisra">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/shanemisra/">Linkedin</a>
        </span>
        <span>
        <h4>Carol Bradsen</h4>
          <a href="https://github.com/cbradsen">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/carol-bradsen/">Linkedin</a>
        </span>
        <span>
        <h4>Cade Chaney</h4>
          <a href="https://github.com/cadechaney">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/jonathan-chaney-a333ba235/">Linkedin</a>
        </span>
      </footer>
    </>
  )
}

export default MainPage;