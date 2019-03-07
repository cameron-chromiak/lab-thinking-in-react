import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
      <div className="product-search">
        <form>
          <label for="search">Search Product: </label><br></br>
          <input type="text" name="search"></input><br></br>
          <input type="checkbox" name="inStock"></input>
          <label for="inStock"> Only show products in stock</label>
          </form>
      </div>
    )
  }

}

export default SearchBar;