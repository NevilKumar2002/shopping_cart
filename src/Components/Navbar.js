// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='NavbarComponents'>
      <h2>Shopping Cart</h2>
        <div className='home-cart-navbar'>
        <h2>
          <Link to="/" className='link'>Home Page</Link>
        </h2>
        <h2>
          <Link to="/cart" className='link'>Cart Page</Link>
        </h2>
      
        </div>
    </nav>
  );
}

export default Navbar;
