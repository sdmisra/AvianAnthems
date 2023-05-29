import { Component } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import { Route, Switch } from 'react-router-dom'
import mockData from '../../MockData/mock-data.json'

type AppState = {
  count: number
  currentCnt: string
  currentType: string
  searchResults: Array<{}>
}

class App extends Component<{}, AppState> {
  state = {
    count: 0,
    currentCnt: "",
    currentType: "",
    searchResults: []
  }

fetchResults = (event: React.MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => {
  event.preventDefault()
  console.log(formState.selectedCnt, formState.selectedType)
  console.log("Chirp Chirp API Call:", mockData)
  }

render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
         <MainPage selectedCnt={this.state.currentCnt} selectedType={this.state.currentType} fetchResults={this.fetchResults} />
        </Route>
        <Route exact path="/results">
          <SearchResults />
        </Route>
      </Switch>
    </div>
  )
}
}

export default App;
