import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable.js';




class App extends Component {


  state = {
    data: data
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}


export default App;
