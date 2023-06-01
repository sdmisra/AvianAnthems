import { Component } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import { Route, Switch } from 'react-router-dom'
import { FetchConditional } from '../../FetchConditonal/FetchConditional'

type AppState = {
  count: number
  currentCnt: string
  currentType: string
  searchResults: Array<{}>
  chosenID: string
}

class App extends Component<{}, AppState> {
  state = {
    count: 0,
    currentCnt: "",
    currentType: "",
    searchResults: [],
    chosenID: ''
  }

fetchResults = (event: React.MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => {
  event.preventDefault()
  
      FetchConditional(formState.selectedCnt, formState.selectedType)
      .then(data => {
        console.log(data)
        this.setState({ searchResults: data})
      })
  }
  handleClick = (id:string) =>{
    this.setState({...this.state, chosenID: id})
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
          <SearchResults results={this.state.searchResults} getInfo={this.handleClick} />
        </Route>
        <Route path='/info/:id'>
        </Route>
      </Switch>
    </div>
  )
}
}

export default App;
