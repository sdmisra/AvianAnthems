import { Component, MouseEvent } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import { Route, Switch } from 'react-router-dom'

type AppState = {
  count: number
  currentCnt: string
  currentType: string
}

class App extends Component<{}, AppState> {
  state = {
    count: 0,
    currentCnt: "",
    currentType: "",
  }

fetchResults = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  console.log("YES")
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
