import React from 'react';
import './Cats.css';

class Cats extends React.Component {

  render() {
    const { catImage, counter } = this.state;
    const { increaseCounter } = this;
    const { name } = this.props;

    return (
      <div className='cats-container_info'>
        <h2>{name}</h2>
        <img className='cats-photo' src={catImage} alt='Imagen gato' onClick={increaseCounter} />
        <p className='cats-counter'>{counter}</p>
      </div>
    );
  }
}

export default Cats;
