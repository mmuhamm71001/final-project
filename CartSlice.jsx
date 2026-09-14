import { createSlice } from "@reduxjs/toolkit";

// Redux slice that owns all shopping cart state for Paradise Nursery.
// Exposes three reducer functions used throughout the app:
//   - addItem: adds a new plant to the cart, or bumps its quantity by 1
//     if it's already in the cart
//   - removeItem: removes a plant from the cart entirely
//   - updateQuantity: sets a specific plant's quantity directly (used by
//     the increment/decrement controls on the Cart page)
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // { id, name, price, category, color, emoji, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

const cartReducer = CartSlice.reducer;
export default cartReducer;
