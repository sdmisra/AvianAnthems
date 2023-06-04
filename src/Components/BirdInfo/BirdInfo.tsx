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
      <div className="bird-info-container">
        <img className="bird" src={assets} alt="two birds looking at you from a branch"></img>
        <section className="bird-data-container">
          <h3>{chosenBird.en}</h3>
          <p>𝑩𝒊𝒐 : {chosenBird.stage} {chosenBird.sex}</p>
          <p>𝑻𝒚𝒑𝒆 𝒐𝒇 𝑪𝒂𝒍𝒍 : {chosenBird.type}</p>
          <p>𝑹𝒆𝒄𝒐𝒓𝒅𝒆𝒅 𝒊𝒏 : {chosenBird.cnt} at {chosenBird.loc} on {chosenBird.date}</p>
          <p>𝑹𝒆𝒄𝒐𝒓𝒅𝒆𝒅 𝒃𝒚 : {chosenBird.rec}</p>
          <p style={{fontStyle: "italic"}}> 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 : {chosenBird.rmk}</p>
          <section className="audio-details-container">
            <audio src={chosenBird.file} controls className="bird-info-audio"></audio>
            <img className="osci-image" src={chosenBird.osci.med} alt="recording of birdsong shown as a visual graph"></img>
          </section>
        </section>
        
      </div>
    )
  }


export default BirdInfo;