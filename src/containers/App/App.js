import React, { Component } from 'react';
import './App.css';
import Cats from '../../components/Cats/Cats'
import Counter from '../../components/Counter/Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cats />
        <Counter />
      </div>
    );
  }
}

export default App;

