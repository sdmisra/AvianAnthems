import React from 'react'
import './BirdInfo.css'
import assets from '../../assets/birds 07.png'

type BirdProps = {
  chosenBird: birdObject | {}
}

type birdObject = {
  id: string;
  en: string;
  cnt: string;
  file: string;
  stage: string;
  sex: string;
  songType: string;
}

const BirdInfo = (props : BirdProps ) => {
  console.log(props.chosenBird)

  return ( 
    <div className="info-container">
      <img className="bird" src={assets} alt="two birds looking at you from a branch"></img>
      <section className="bird-data-container">
        <h2>Header</h2>
        <p>more about this bird</p>
      </section>
      <section className="audio-details-container">
        <audio src='https://xeno-canto.org/524792/download' controls className="bird-info-audio"></audio>
        <img className="osci-image" src={"//xeno-canto.org/sounds/uploaded/MLTFMFCXEO/wave/XC524792-med.png"} alt="recording of birdsong shown as a visual graph"></img>
      </section>
    </div>
  )
}

export default BirdInfo;