import React, { Component } from 'react';
import './App.css';
import Cats from '../../components/Cats/Cats'

class App extends Component {

  render() {
  
    return (
      <div className="cats-container">
        <Cats name= "Figaro"/>
        <Cats name= "Rison"/>
      </div>
    );
  }
}

export default App;

