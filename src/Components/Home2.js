import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [showProducts , setshowProducts]=useState(false);

  useEffect(() => {
    // Define the URL you want to fetch data from
    const url = "https://dummyjson.com/products";

    // Use the fetch API to make the GET request
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setshowProducts(true);
        setProducts(data.products); // Update the state with the fetched data
        console.log(products)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Items</h1>
      
        {showProducts && products.map((product, index) => (
         <div className='products'>
            <div key={index} className='product-container'>
           <img src={product.images[0]} alt={product.title} className="product-image"/>
           <p>Title:{product.title}</p>
           <p>Price:{product.price}</p>
           <button>Add to Cart</button>

         </div>
         </div>
        ))}

        
      
    </div>
  );
}

export default Home;
