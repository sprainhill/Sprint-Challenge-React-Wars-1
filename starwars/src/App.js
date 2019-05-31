import React, { Component } from 'react';
import './App.scss';

import CharacterList from './components/CharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      prevPage: '',
      newChars: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('data', data)
        console.log('data.results', data.results)
        console.log('data.next', data.next)

        this.setState({ 
          starwarsChars: data.results ,
          nextPage: data.next,
          prevPage: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNextChars = () => {
    this.setState({
      newChars: this.state.nextPage
    })

    getPrevChars = () => {
      this.setState({
        newChars: this.state.prevPage
      })

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
