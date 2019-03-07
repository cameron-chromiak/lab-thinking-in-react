import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {


  render() {
    return (
      <div className="products">
        <ProductRow/>
          <div className="name-column">
            <h3>Name</h3>

          </div>
          <div className="price-column">
            <h3>Price</h3>
          </div>
      </div>
    )
  }


}

export default ProductTable;
