import { Component } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import { Route, Switch } from 'react-router-dom'
import mockData from '../../MockData/mock-data.json'
// import { data } from 'cypress/types/jquery'
import callData from '../Api/ApiCalls'
import fetchRecordings from '../Api/ApiCalls'


type AppState = {
  count: number
  currentCnt: string
  currentType: string
  searchResults: Array<{}>
}

type ApiResponse = {
  recordings: Recording[]
}

type Recording = {
  type: string
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
  // const filteredData = mockData.recordings.filter(data => 
  //      data.cnt === formState.selectedCnt && data.type.includes(formState.selectedType)) 
  //   console.log(filteredData)
  // this.setState({searchResults: filteredData})  
    console.log(formState)
  const combinedParameters = `${formState.selectedCnt}-${formState.selectedType}`
  switch (combinedParameters) {
    case 'United States-flight-song':
      fetchRecordings('https://xeno-canto.org/api/2/recordings?query=cnt:%22=United%20States')
      .then((data: ApiResponse) => {
        const filtered = data.recordings.filter(recording => recording.type === 'flight call')
        console.log(filtered)
      })
      break;
      default:
        console.log('still works')
      }
      

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
          <SearchResults results={this.state.searchResults} />
        </Route>
      </Switch>
    </div>
  )
}
}

export default App;
