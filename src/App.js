import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Helo</h1>
        <Button title='Find Flights' primary />
        <Button title='Sign up'/>
        <Button title='Enter Competition' magic/>
      </div>
    );
  }
}

export default App;
