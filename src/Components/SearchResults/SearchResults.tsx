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
}

const SearchResults = ({ results }: SearchResultsProps) => {

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
    />
  )
})
  return (
    <div className="search-title">
    <h1> Results from your search</h1>
    <section className="search-results-container">
        {resultCards}
    </section>
    </div>
  )
}

export default SearchResults;