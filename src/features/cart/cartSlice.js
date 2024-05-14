import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        // If the item exists, increase the quantity
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          quantity: state.items[existingIndex].quantity + 1,
        };
      } else {
        // Add a new item to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Optional: Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
