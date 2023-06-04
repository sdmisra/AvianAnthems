
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
        <h4>𝑱𝒐𝒔𝒉𝒖𝒂 𝑴𝒂𝒓𝒕𝒊𝒏:</h4>  
        <a href="https://github.com/jmartin777">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/joshua-martin-b57736259/">Linkedin</a>
        </span>
        <span>
          <h4>𝑺𝒉𝒂𝒏𝒆 𝑴𝒊𝒔𝒓𝒂</h4>
          <a href="https://github.com/sdmisra">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/shanemisra/">Linkedin</a>
        </span>
        <span>
        <h4>𝑪𝒂𝒓𝒐𝒍 𝑩𝒓𝒂𝒅𝒔𝒆𝒏</h4>
          <a href="https://github.com/cbradsen">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/carol-bradsen/">Linkedin</a>
        </span>
        <span>
        <h4>𝑪𝒂𝒅𝒆 𝑪𝒉𝒂𝒏𝒆𝒚</h4>
          <a href="https://github.com/cadechaney">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/jonathan-chaney-a333ba235/">Linkedin</a>
        </span>
      </footer>
    </>
  )
}

export default MainPage;