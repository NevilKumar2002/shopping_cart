import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import CheckoutSidebar from './CheckoutSidebar.js';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div >
      <h1 style={{textAlign:"center"}}>My Cart</h1>
      <div className='mycart-container'>
      <div className='cart-products'>
      {cart.map((product, index) => (
       
         <div key={index} className='product-container'>
         <img src={product.images[0]} alt={product.title} className="product-image"/>
         <p><strong>Title:</strong>{product.title}</p>
         <p><strong>Price:</strong>{product.price}</p>
         <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>

       </div>
      
      
      ))}
      
       </div>
       <div className='checkout-container'>
       <CheckoutSidebar />
       </div>
      </div>
</div>
  );
      }


export default Cart ;