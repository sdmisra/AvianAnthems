import React from 'react'
import './BirdInfo.css'
import assets from '../../assets/birds 07.png'

type BirdProps = {
  chosenBird: birdObject
}

type birdObject = {
  id: string;
  en: string;
  cnt: string;
  file: string;
  stage: string;
  sex: string;
  type: string;
  loc: string;
  date: string;
  rec: string;
  also: string;
  rmk: string;
  osci: {med: string};
}

const BirdInfo = ({ chosenBird }:
BirdProps ) => {

  console.log("Chosen", chosenBird)
    return ( 
      <div className="info-container">
        <img className="bird" src={assets} alt="two birds looking at you from a branch"></img>
        <section className="bird-data-container">
          <h2>{chosenBird.en}</h2>
          <p></p>
          <p>{chosenBird.stage}</p>
          <p>{chosenBird.sex}</p>
          <p>{chosenBird.type}</p>
            <p>In the background listen for: {chosenBird.also}</p>
          <p>Recorded in {chosenBird.cnt} at {chosenBird.loc}</p>
          <p>on {chosenBird.date}</p>
          <p>Recorded by {chosenBird.rec}</p>
          <p>Notes from the recorder: {chosenBird.rmk}</p>
        
        </section>
        <section className="audio-details-container">
          <audio src={chosenBird.file} controls className="bird-info-audio"></audio>
          <img className="osci-image" src={chosenBird.osci.med} alt="recording of birdsong shown as a visual graph"></img>
        </section>
      </div>
    )
  }


export default BirdInfo;