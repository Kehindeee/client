import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  return (
    <div className="cart">
      {cart.items.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          />
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        Total: ${cart.total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
