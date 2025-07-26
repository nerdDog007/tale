import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice.jsx';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

// 🔹 These are the correct types for use in components

export default store;
