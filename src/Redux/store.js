import { configureStore } from '@reduxjs/toolkit';
import { eventSlices } from './eventSlices';

export const store = configureStore({
  reducer: {
    events: eventSlices,
  },
});
