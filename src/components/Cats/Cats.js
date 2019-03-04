import React from "react";

class Cats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catImage: "",
      counter: 0
    };
  }

  componentDidMount() {
    this.getCat();
  }

  increaseCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  getCat = () => {
    const catUrl = "https://api.thecatapi.com/v1/images/search";
    fetch(catUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ catImage: data[0].url });
      })
      .catch(error => console.error(error));
  };

  render() {
    const { catImage, counter } = this.state;
    const { increaseCounter } = this;
    const { name } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <img src={catImage} alt="Imagen gato" onClick={increaseCounter} />
        <p>{counter}</p>
      </div>
    );
  }
}

export default Cats;
