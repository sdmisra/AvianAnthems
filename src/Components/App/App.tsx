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
  chosenBird: birdObject
}

type birdObject = {
  id: string;
  en: string;
  cnt: string;
  file: string;
  stage: string;
  sex: string;
  songType: string;
  loc: string;
  date: string;
  rec: string;
  also: string;
  rmk: string;
  osci: string;
  sono: string;
}

class App extends Component<{}, AppState> {
  state = {
    currentCnt: "",
    currentType: "",
    searchResults: [],
    chosenBird: {id:'', en:'', cnt:'', file:'', stage:'', sex:'', songType:'', loc:'', date:'', rec:'', also:'',  rmk:'', osci:'', sono:'' }
  }

  fetchResults = (event: React.MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => {
      event.preventDefault()
      FetchConditional(formState.selectedCnt, formState.selectedType)
      .then(data => {
        this.setState({ searchResults: data })
      })
  }
  
  handleClick = (id:string) =>{
    const foundBird = this.state.searchResults.find(bird => bird['id']=== id);

    foundBird ? 
      this.setState({chosenBird: foundBird}) 
      : 
      this.setState({chosenBird: {id:'', en:'', cnt:'', file:'', stage:'', sex:'', songType:'', loc:'', date:'', rec:'', also:'',  rmk:'', osci:'', sono:'' }});

    console.log('App state at time of click:', this.state.chosenBird);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage 
            selectedCnt={this.state.currentCnt} 
            selectedType={this.state.currentType} 
            fetchResults={this.fetchResults} 
            />
          </Route>
          <Route exact path="/results">
            <SearchResults 
            results={this.state.searchResults} 
            getInfo={this.handleClick} // maybe rename this function! confusing
            />
          </Route>
          <Route path='/info/:id'>
            <BirdInfo 
            chosenBird={this.state.chosenBird}
            
            />
          </Route>
        </Switch>
      </div>
    )
}
}

export default App;
