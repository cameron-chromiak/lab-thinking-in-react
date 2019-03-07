import React, { Component } from 'react';


class SearchBar extends Component {

  state = {
    term: ''
  }

  handleChange = (e) =>{
    this.setState({term: e.target.value})
    this.props.onSearchSubmit2(e.target.value)
  }

  render() {
    return (
      <div className="product-search">
        <form>
          <label for="search">Search Product: </label><br></br>
          <input type="text" value={this.state.term}
            onChange={this.handleChange}/><br></br>

        <input type="checkbox" name="inStock"></input>
          <label for="inStock"> Only show products in stock</label>
          </form>
      </div>
    )
  }
}

export default SearchBar;
