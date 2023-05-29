import React from 'react'
import './SearchResults.css'

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

  return (
    <section className="search-results">
      <h1> Results from your search</h1>
      <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p>{result.en}</p>
              <p>{result.stage}</p>
              <p>{result.sex}</p>
              <p>{result.type}</p>
              <p>{result.file}</p>
              <p>{result.cnt}</p>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default SearchResults;