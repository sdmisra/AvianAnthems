import React, { Component } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import BirdInfo from '../BirdInfo/BirdInfo'
import Error from '../Error/Error'
import { Route, Switch, Redirect } from 'react-router-dom'
import { FetchConditional } from '../../FetchConditonal/FetchConditional'

type AppState = {
  currentCnt: string
  currentType: string
  searchResults: Array<{}> | Array<birdObject>
  chosenBird: birdObject
  error: string
}

type birdObject = {
  id: string;
  en: string;
  cnt: string;
  file: string;
  stage: string;
  sex: string;
  type: string;
  loc: string;
  date: string;
  rec: string;
  also: string;
  rmk: string;
  osci: {med: string};
}

class App extends Component<{}, AppState> {
  state = {
    currentCnt: "",
    currentType: "",
    searchResults: [],

    chosenBird: {id:'', en:'', cnt:'', file:'', stage:'', sex:'', type:'', loc:'', date:'', rec:'', also:'',  rmk:'', osci:{ med:''} },
    error: 'An error has occured. Click our corner nest to fly back home!'
  }

  fetchResults = (event: React.MouseEvent<HTMLButtonElement>, formState: {selectedCnt: string, selectedType: string}) => {
      event.preventDefault()
      FetchConditional(formState.selectedCnt, formState.selectedType)
      .then(data => {
        this.setState({ searchResults: data })
      })
  }
  
  handleClick = (id:string) =>{
    const foundBird = this.state.searchResults.find(bird => bird['id']=== id);
    const resetBird = {id:'', en:'', cnt:'', file:'', stage:'', sex:'', type:'', loc:'', date:'', rec:'', also:'',  rmk:'', osci:{med:''} }

    if (foundBird) {
      this.setState({chosenBird: foundBird})
    }
    else {
      this.setState({chosenBird: resetBird, error: 'No results Found! Please fly back home and try again'});
      <Redirect to='/error'/>
    }
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
            chosenBird={this.state.chosenBird} />
          </Route>
          <Route exact path="/error">
            <Error message={this.state.error}/>
          </Route>
          <Route>
            <Redirect to="/error"/>
          </Route>
        </Switch>
      </div>
    )
}
}

export default App;