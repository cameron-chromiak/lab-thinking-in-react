import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends Component {

render() {
 return (
   <div className="product-table">
    <h1>IronStore</h1>
     <SearchBar />
     <ProductTable />
   </div>
 )
}


}

export default FilterableProductTable;
