import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../actions/cartActions';

function CheckoutSidebar() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const handleCheckout = () => {
    dispatch(clearCart()); // Dispatch the clearCart action
  };
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Checkout</h2>
      <div className='checkout-container'>
        {cart.map((product) => (
            <div  key={product.id} style={{display:"flex" ,justifyContent:"space-between", textDecoration:"none", paddingLeft:"20px", paddingRight:"20px"}}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
        ))}
      <div style={{display:"flex" ,justifyContent:"space-between", textDecoration:"none" ,paddingLeft:"20px", paddingRight:"20px"}}>
        <p><strong>Total price:</strong></p>
        <p><stong>{totalPrice}</stong></p>
      </div>
      <button onClick={handleCheckout}>Click to Checkout</button>
      </div>
      
      <div>
        
      </div>
    </div>
  );

}

export default CheckoutSidebar;
{/* <ol>
        {cart.map((product) => (
<div style={{display:"flex"}}>
<span><li key={product.id}>{product.title}</li></span>
<p>{product.price}</p>
</div>
        ))}
      </ol> */}