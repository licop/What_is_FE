import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// 将reducer传入store中
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

