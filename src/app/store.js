import { configureStore } from '@reduxjs/toolkit';
import whyChooseUsSlice from '../features/whyChooseUs/whyChooseUsSlice';

const store = configureStore({
  reducer: {
    whyChooseUs : whyChooseUsSlice
  }
})

export default store