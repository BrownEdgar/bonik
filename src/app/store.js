import { configureStore } from '@reduxjs/toolkit';
import partnerSlice from '../features/partner/partnerSlice';

const store = configureStore({
  reducer: {
    partner: partnerSlice
  }
})

export default store