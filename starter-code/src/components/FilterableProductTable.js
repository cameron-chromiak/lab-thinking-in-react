import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends Component {

render() {
 return (
   <div className="product-table">
    <h1>IronStore</h1>
    {this.props.children}

     <ProductTable data3={this.props.data2} />
   </div>
 )
}


}

export default FilterableProductTable;
