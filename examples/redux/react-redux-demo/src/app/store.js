import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';

// 将reducer传入store中
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
});

