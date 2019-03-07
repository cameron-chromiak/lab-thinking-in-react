import React, { Component } from 'react';
import data from '../data.json';

class ProductRow extends Component {

  state = {
    data: data
  }

  showProducts = () =>{
    let product = this.state.data.data.map((item, key) => {
          return(
            <div className= 'item-row'>
              <li key={key}>{item.name}</li>
              <li key={key}>{item.price}</li>
            </div>
          )
      })
      return product
  }

  render () {
      return(
          <div>
            {this.showProducts()}
          </div>
      )
  }
}

export default ProductRow;
