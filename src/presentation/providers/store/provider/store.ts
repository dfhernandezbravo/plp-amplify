import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@store/slices/products';
import shoppingCartSlice from '@store/slices/shopping-cart';

export const plpStore = configureStore({
  reducer: {
    products: productSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof plpStore.getState>;
export type AppDispatch = typeof plpStore.dispatch;
