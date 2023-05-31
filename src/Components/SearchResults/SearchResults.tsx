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

const resultCards = results.map(result => {
  return (
    <ResultCard 
      bird={result.en}
      stage={result.stage}
      sex={result.sex}
      songType={result.type}
      performance={result.file}
      country={result.cnt}
      key={result.id}
    />
  )
})
  return (
    <section className="search-results-container">
      <h1> Results from your search</h1>
        {resultCards}
    </section>
  )
}

export default SearchResults;