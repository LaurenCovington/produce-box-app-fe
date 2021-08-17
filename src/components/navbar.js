// should be able to just drop this into current navbar file; make sure to import Cart and ProductConsumer correctly
import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../store/appContext'; // GET LOCATION
import Cart from './Cart';
//import logo from '../img/logo.png';


export default function Navbar() {
    return (
<ProductConsumer>
    {value=>{
        const{handleNav,navOpen,cartOpen, handleCartNav,closeNavCart,cart}=value;

    return(
    <div className="container sticky">
    
    <nav className="sticky">
        <div className="logo-btn">
            
            <Link to="/" onClick={closeNavCart}><img src="" alt=""/> <span className="shoes"> Offerings </span> addict</Link>

            <div className="cart hide" onClick={handleCartNav} > <i className="fas fa-shopping-cart"></i>
    <span>{cart.length}</span>
            </div>

            <div className="btn" onClick={handleNav}>
            <i className="fas fa-bars"></i> 
            </div>
        </div>

        <div className="dra">
         <div className="drawers">
           <ul  className={navOpen?"newLinks links":" links"} onClick={closeNavCart} >
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/products">Offerings</Link></li>
            {/* <li><Link to="/" onClick={handleCartNav} >Cart <i className="fas fa-shopping-cart cart"><span >0</span></i></Link></li> */}
          </ul>
     
      
      <Cart value={value} />
            
      
       


         </div>
    <span className="carta"  onClick={handleCartNav}>Cart <i className="fas fa-shopping-cart cart"><span >{cart.length}</span></i></span>
        
        </div>
        
    </nav>
    </div>
    )
    }}
</ProductConsumer>
    )
}






// import React from "react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Navbar = () => {
// 	const { store, actions } = useContext(Context);
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				{ !store.token ? 
// 					<Link to="/login">
// 					<button className="btn btn-primary">Log In</button>
// 					</Link>
// 					:
// 					<button onClick={() => actions.logout()} className="btn btn-primary">Log Out</button>
// 				}
// 			</div>
// 		</nav>
// 	);
// };

