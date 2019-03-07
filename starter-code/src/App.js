import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable.js';
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';
import ProductRow from './components/ProductRow.js';




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
