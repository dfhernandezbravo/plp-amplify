import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from '@store/slices/device';
import cmsContentSlice from '@store/slices/cmsContent';
import productSlice from '@store/slices/products';
import shoppingCartSlice from '@store/slices/shopping-cart';
import filterSlice from '@store/slices/filters';

export const plpStore = configureStore({
  reducer: {
    products: productSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    device: deviceSlice.reducer,
    cmsStore: cmsContentSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof plpStore.getState>;
export type AppDispatch = typeof plpStore.dispatch;
