import { configureStore } from '@reduxjs/toolkit';
import shiritoriReducer from './ShiritoriSlice';

const store = configureStore({
  reducer: {
    shiritori: shiritoriReducer,
  },
});

export default store;
