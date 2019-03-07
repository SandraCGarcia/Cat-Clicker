import React, { Component } from 'react';
import './App.css';
import Cats from '../../components/Cats/Cats'
import List from '../../components/List/List'

const NUMBER_OF_CATS= 5;
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';
const CAT_ARRAY= [];
const CAT_NAMES=['Figaro', 'Rison', 'Garfield', 'Nerma', 'Sylverter']


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      selectedCat: ''
    };
  }
  
  componentDidMount() {
    this.getCat();
  }
//Aumenta el contador
  increaseCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
//Recoge el evento del gato seleccionado
  // selectCat = event => {
  //   const clickedCat = event.currentTarget.id;
  //   for ( const cat of CAT_ARRAY ) {
  //     if (cat.name = clickedCat) {
  //       this.setState( { selectedCat: cat } )
  //     }
  //   }
  // }

//Pasa el for y crea todos los gatos
  getCat = () => {

    for(let i=0; i<NUMBER_OF_CATS;i++){
    fetch(CAT_URL)
      .then(response => response.json())
      .then(data => { CAT_ARRAY.push({
        url: data[0].url,
        name: CAT_NAMES[i],
        counter: 0
      })
      })
      .catch(error => console.error(error));
  };
  }
  render() {
  const { selectedCat, increaseCounter, selectCat } = this.state;
  
    return (
      <div className='cats-container'>
        <List 
          CAT_ARRAY={CAT_ARRAY}
          selectCat={selectCat}
        />
        <Cats 
          selectedCat={selectedCat}
          increaseCounter={increaseCounter}
        />
      </div>
    );
  }
}

export default App;

