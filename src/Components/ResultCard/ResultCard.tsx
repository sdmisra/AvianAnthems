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
   <div className="result-card">
      <h4 className="card-header">
      Performer:
      <br/>
        {bird}
      </h4>
      <h5 className="card-detail">
        Age: {stage || 'unavailable'}
      <br/>
        Sex: {sex || 'uncertain'}</h5>
      <h5 className="card-detail">Song Type: {songType}</h5>
      <audio src={performance} controls className="card-controls"></audio>
      <h5 className="card-detail">
        Location of Recording: {country}</h5>
   </div>
  )
}

export default ResultCard