import { Component, MouseEvent } from 'react'
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import { Route, Switch} from 'react-router-dom'

type AppState = {
  count: number
  currentSelection: string
  
}

type AppProps = {
  myFunction: () => MouseEvent
}

// type AppFunctions = {
//   findRecording: () => MouseEvent
// }

class App extends Component<AppProps, AppState> {
  state = {
    count: 0,
    currentSelection: "",
   
  }

handleClick = () => {
  this.setState((prevState) => ({ count: prevState.count + 1}))
}

findRecording(event: MouseEvent<HTMLButtonElement>) {
  this.props.myFunction
  event.preventDefault()
console.log("YES")
  }

render() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <button onClick={this.handleClick}></button> */}
      {/* {this.state.count} */}
      <Header />
      <Switch>
        <Route exact path="/">
         <MainPage selected={this.state.currentSelection} findRecording={this.findRecording} />
        </Route>
      </Switch>
    </div>
  )
}
}

export default App;
