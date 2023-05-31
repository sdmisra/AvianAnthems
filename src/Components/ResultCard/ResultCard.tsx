
import './ResultCard.css';


type ResultCardProps = {
  bird: string;
  stage: string;
  sex: string;
  songType: string;
  performance: string;
  country: string;
  id: string;
}

const ResultCard = ({ bird, stage, sex, songType, performance, country, id }: ResultCardProps) => {

  return (
   <div className='card' id={id} >
      <h4>{bird}</h4>
      <h5>{stage} {sex}, {songType}</h5>
      <audio src={performance} controls></audio>
      <h5>{country}</h5>

   </div>
  )
}

export default ResultCard