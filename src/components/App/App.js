import React, { Component } from 'react';
import './App.css';
import BusnessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'

class App extends Component() {

  render() {
    return <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusnessList />

    </div>
  }


}

export default App;
