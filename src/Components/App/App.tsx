import { Component } from 'react';
import MainPage from '../MainPage/MainPage'
import Header from '../Header/Header'
import { Route, Switch} from 'react-router-dom'


type AppState = {
  count: number
}

class App extends Component<{}, AppState> {
  state = {
    count: 0,
  }

handleClick = () => {
  this.setState((prevState) => ({ count: prevState.count + 1}))
}

render() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <button onClick={this.handleClick}></button> */}
      {/* {this.state.count} */}
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}>
         <MainPage />
        </Route>
      </Switch>
    </div>
  )
}
}

export default App;
