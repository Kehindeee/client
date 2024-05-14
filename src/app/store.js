import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,  // Ensure these keys are correctly referenced in your components
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
