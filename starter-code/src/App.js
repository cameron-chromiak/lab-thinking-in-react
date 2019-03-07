import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable.js';
import SearchBar from './components/SearchBar'



class App extends Component {

  state = {
    data: data,
    originalData: data
  }

  onSearchSubmit = (term) => {
    let tempData = this.state.originalData.data.filter(item => item.name.includes(term));
    console.log(term)
    this.setState({
      data: {data: tempData }
    })
}



  render() {
    return (
      <div className="App">
        <FilterableProductTable data2={this.state.data}>
            <SearchBar onSearchSubmit2={this.onSearchSubmit}/>
        </FilterableProductTable>

      </div>
    );
  }
}


export default App;
