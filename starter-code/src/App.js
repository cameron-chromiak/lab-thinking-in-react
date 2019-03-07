import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable.js';
import SearchBar from './components/SearchBar'



class App extends Component {

  state = {
    data: data
  }

  onSearchSubmit = (term) => {
    console.log(term);
  }


  render() {
    return (
      <div className="App">
        <SearchBar onSearchSubmit2={this.onSearchSubmit}/>
      </div>
    );
  }
}


export default App;
