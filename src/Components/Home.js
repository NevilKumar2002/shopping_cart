import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions.js';
import { addToCart } from '../actions/cartActions.js';
console.log("Nevil kumar")
function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
//   const [products, setProducts] = useState([]);
const[carts, setcarts]=useState(true);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(fetchProducts(data.products));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product)
  };
console.log(products)
  return (
    <div>
    <h1 style={{textAlign:"center"}}>All Items</h1>
    <div className='products'>
      {products.map((product, index) => (
       
         <div key={index} className='product-container'>
         <img src={product.images[0]} alt={product.title} className="product-image"/>
         <p><strong>Title:</strong>{product.title}</p>
         <p><strong>Price:</strong>{product.price}</p>
        {carts &&  <button  onClick={() => handleAddToCart(product)}>Add to Cart</button>}

       </div>
      
      ))}
       </div>

      
    
  </div>
  );
}

export default Home;