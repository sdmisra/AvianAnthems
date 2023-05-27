import { Component } from 'react';


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
      <h1>Hello</h1>
      <button onClick={this.handleClick}></button>
      {this.state.count}

    </div>
  )
}
}

export default App;
