import React from 'react'
import './SearchResults.css'
import ResultCard from "../ResultCard/ResultCard"

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

const SearchResults = ({ results, getInfo }: SearchResultsProps) => {

const resultCards = results.slice(0, 6).map(result => {
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
})
  return (
    <div className="results-page">
      <h1> Search Results:</h1>
      <section className="search-results-container">
          {resultCards} 
      </section>
    </div>
  )
}

export default SearchResults;