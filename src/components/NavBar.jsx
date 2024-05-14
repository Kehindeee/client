import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-blue-300">MyEcommerce</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/cart" className="hover:text-blue-300">Cart</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
