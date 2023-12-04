import { configureStore } from '@reduxjs/toolkit';

export const plpStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof plpStore.getState>;
export type AppDispatch = typeof plpStore.dispatch;
