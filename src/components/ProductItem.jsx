import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imagePath: product.imagePath 
    }));
  };
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <img src={`http://localhost:3000/${product.imagePath}`} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />

      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
