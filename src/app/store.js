import { configureStore } from '@reduxjs/toolkit';
import testSlice from '../features/testSclice/testSlice';

const store = configureStore({
  reducer: {
    testSlice : testSlice

  }
})

export default store