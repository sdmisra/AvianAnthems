import React from 'react'
import './BirdInfo.css'
import assets from '../../assets/birds 07.png'
import { Redirect } from 'react-router-dom'

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
  if (chosenBird.en === "") {
    return (
      <Redirect to="/error"/>
    )
  } 

    return ( 
      <div className="bird-info-container">
        <img className="bird" src={assets} alt="two birds looking at you from a branch"></img>
        <section className="bird-data-container">
          <h3>{chosenBird.en}</h3>
          <p>Bird type if known: {chosenBird.stage} {chosenBird.sex}</p>
          <p> {chosenBird.type}</p>
          <p>Recorded in: {chosenBird.cnt} at {chosenBird.loc} on {chosenBird.date}</p>
          <p>Recorded by: {chosenBird.rec}</p>
          <p className="remark" style={{fontStyle: "italic"}}>Notes if included: {chosenBird.rmk}</p>
          <section className="audio-details-container">
            <audio src={chosenBird.file} controls className="bird-info-audio"></audio>
            <img className="osci-image" src={chosenBird.osci.med} alt="recording of birdsong shown as a visual graph"></img>
          </section>
        </section>
      </div>
    )
  }
  
export default BirdInfo;