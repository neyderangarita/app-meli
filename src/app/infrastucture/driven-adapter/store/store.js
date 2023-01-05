import { configureStore } from '@reduxjs/toolkit';
import { seekerSlice } from './slices/seeker';

export const store = configureStore({
  reducer: {
      products: seekerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})