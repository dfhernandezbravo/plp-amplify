import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@store/slices/products';

export const plpStore = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof plpStore.getState>;
export type AppDispatch = typeof plpStore.dispatch;
