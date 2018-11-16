import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = {
    username: "rubydoobydoo"
  }

  changeUsernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    } )
  }

  render() {
    const style = {
      margin: '10px',
      padding: '10px',
      border: '5px solid black'
    }

    return (
      <div className="App" style={style}>
        <UserInput
          changed={this.changeUsernameHandler.bind(this)}
          username={this.state.username} />
        <UserOutput
          username={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
