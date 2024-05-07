import { configureStore } from '@reduxjs/toolkit';
import companyNewsSlice from '../features/companyNews/companyNewsSlice';

const store = configureStore({
  reducer: {
    companyNews: companyNewsSlice
  }
})

export default store