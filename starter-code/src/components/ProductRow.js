import React, { Component } from 'react';
import data from '../data.json';

class ProductRow extends Component {


  showProducts = () =>{
    console.log(data)
    let product = this.props.data4.data.map((item, key) => {
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
