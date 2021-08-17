// when you click a product, this is the comp that shows its detail info (price, etc)
import React, { Component } from 'react';
import {ProductConsumer} from '../store/appContext'; // GET LOCATION
import {Link} from 'react-router-dom';

export default class OfferingDetails extends Component {
render(props) {
return (
<ProductConsumer>

    
    {value=>{
        const {data, addToCart}=value;
        
        console.log(this.props.match.params.id);

        let results = data.find(item=>item.id===parseInt(this.props.match.params.id));


return(
<div className="det">
    
<div className="inside-container">
<h2>Offering Details</h2>

    <div className="det-center">
     <div className="det-img">
    <img src={`/${results.img}`} alt=""/>
    </div>

    <div className="det-info">
        <h3>{results.title}</h3>
        <p>{results.details}</p>
    <h4>price: <span>${results.price}</span></h4>
    

    <div className="but-options">
    <Link to='/products'><button className="back-products">back to products</button></Link>
    <button className="add-toCart" onClick={()=>addToCart(results.id)}>Add to cart</button>
    </div>

 

  </div>
 

</div>
</div>


</div>
)
    }}
</ProductConsumer>
)
}
}
