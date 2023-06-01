import { Component } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import BirdInfo from '../BirdInfo/BirdInfo'
import { Route, Switch } from 'react-router-dom'
import { FetchConditional } from '../../FetchConditonal/FetchConditional'

type AppState = {
  currentCnt: string
  currentType: string
  searchResults: Array<{}> | Array<birdObject>
  chosenBird: {} | birdObject
}

type birdObject = {
  bird: string;
  stage: string;
  sex: string;
  songType: string;
  performance: string;
  country: string;
  id: string;
}

class App extends Component<{}, AppState> {
  state = {
    currentCnt: "",
    currentType: "",
    searchResults: [],
    chosenBird: {}
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
    const foundBird = this.state.searchResults.find(bird => bird['id']=== id);
    foundBird ? 
    this.setState({chosenBird: foundBird}) : this.setState({chosenBird: {}})
    console.log('A bird has been chosen:', this.state.chosenBird)
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
            <BirdInfo chosenBird={this.state.chosenBird}/>
          </Route>
        </Switch>
      </div>
    )
}
}

export default App;
