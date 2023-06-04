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

const ResultCard = ({ bird, songType, performance, country, id, getInfo }: ResultCardProps) => {
  return (
   <div className="result-card">
    <div className='details'>
      <h4 className="card-header">
        {bird}
      </h4>
      <h5 className="card-detail">
        Location: {country}</h5>
      <h5 className="card-detail">Type: {songType}</h5>
    </div>
      <audio src={performance} controls className="card-controls"></audio>
      <Link to= {`/info/${id}`}>
        <button className='more-info' id={id} onClick={(event) => getInfo((event.target as HTMLButtonElement ).id)}>Learn More</button>
      </Link> 
   </div>
  )
}

export default ResultCard