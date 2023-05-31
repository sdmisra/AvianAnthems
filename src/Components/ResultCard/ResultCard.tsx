
import './ResultCard.css';


type ResultCardProps = {
  bird: string;
  stage: string;
  sex: string;
  songType: string;
  performance: string;
  country: string;
}

const ResultCard = ({ bird, stage, sex, songType, performance, country }: ResultCardProps) => {

  return (
   <div>
      <h4>{bird}</h4>
      <h5>{stage} {sex}, {songType}</h5>
      <audio src={performance} controls></audio>
      <h5>{country}</h5>

   </div>
  )
}

export default ResultCard