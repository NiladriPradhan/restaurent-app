// src/redux/cartSlice.ts (or .js if not using TypeScript)
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<CartItem>) => {
    //   const existingItem = state.items.find(item => item.id === action.payload.id);
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.items.push({ ...action.payload, quantity: 1 });
    //   }
    //   state.totalQuantity += 1;
    //   state.totalAmount += action.payload.price;
    // },


    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;

        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
