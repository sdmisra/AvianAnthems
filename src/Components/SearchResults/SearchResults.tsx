import React from 'react'
import './SearchResults.css'
import ResultCard from "../ResultCard/ResultCard"
import plantImage from "../../assets/plant.png"

type Result = {
  id: string;
  en: string;
  stage: string;
  sex: string;
  type: string;
  file: string;
  cnt: string;
}

type SearchResultsProps = {
  results: Array<Result>;
  getInfo: (id:string) => void
}

const SearchResults = ({ results, getInfo }: SearchResultsProps ) => {
  const seenBirds = new Set<string>();
  const maxUniqueBirds = 6;
  let uniqueBirds = 0;

  const resultCards = results.map(result => {
    if (uniqueBirds < maxUniqueBirds && !seenBirds.has(result.en)) {
    seenBirds.add(result.en)
    uniqueBirds += 1;
  
  return (
    <ResultCard 
      bird={result.en}
      stage={result.stage}
      sex={result.sex}
      songType={result.type}
      performance={result.file}
      country={result.cnt}
      key={result.id}
      id={result.id}
      getInfo={getInfo}
    />
  )
  }
})
return (
  <div className="results-page">
    <h1>Search Results:</h1>
    <section className="search-results-container">
      <div className="image-container">
        <img src={plantImage} alt="Plant" className="image" />
      </div>
      {resultCards}
    </section>
  </div>
);
}

export default SearchResults;