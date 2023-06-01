import './ResultCard.css';
import { Link } from 'react-router-dom';

type ResultCardProps = {
  bird: string;
  stage: string;
  sex: string;
  songType: string;
  performance: string;
  country: string;
  id: string;
  getInfo: (id:string) => void
}

const ResultCard = ({ bird, stage, sex, songType, performance, country, id, getInfo }: ResultCardProps) => {
  return (
   <div className="result-card">
      <h4 className="card-header">
        {bird}
      </h4>
      <h5 className="card-detail">
        Location of Recording: {country}</h5>
      <h5 className="card-detail">Song Type: {songType}</h5>
      <audio src={performance} controls className="card-controls"></audio>
      <Link to= {`/info/${id}`}>
        <button className='more-info' id={id} onClick={() => getInfo('fire!')}>..Learn More</button>
      </Link>
     
   </div>
  )
}

export default ResultCard