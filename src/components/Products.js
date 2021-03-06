import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../store/appContext';
import Navbar from './navbar';


export default class Products extends Component {
  render() {
    return (
    <ProductConsumer>
      {value=>{
        const {data, addToCart,closeNavCart}=value;
        
        return(

        <div className="products">

        <Navbar />
        <h2>See What Seattle Growers Are Offering Below</h2>
          <br />
        <div className="products-center">
          {data.map((product)=>{
              return  <Product key={product.id} product={product} addToCart={()=>addToCart(product.id)} closeNavCart={closeNavCart}  />
          })}  
        </div> 

      </div>
    )
}}
</ProductConsumer>
)
}
}
