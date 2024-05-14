import React from 'react';
import ProductList from '../components/ProductList';  

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Welcome to MyEcommerce</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
