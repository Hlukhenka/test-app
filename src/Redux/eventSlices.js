import { createSlice } from '@reduxjs/toolkit';

import { allEvents, getEvent, registerUser } from './eventThunks';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    event: [],
    user: {},
    currentPage: 1,
    hasMoreData: true,
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(allEvents.pending, handlePending)
      .addCase(allEvents.fulfilled, (state, action) => {
        state.events = [...state.events, ...action.payload];
        state.currentPage = state.currentPage + 1;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(allEvents.rejected, handleRejected)
      .addCase(getEvent.pending, handlePending)
      .addCase(getEvent.fulfilled, (state, action) => {
        state.event = action.payload;

        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getEvent.rejected, handleRejected)
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = null;
      })
      .addCase(registerUser.rejected, handleRejected);
  },
});

export const eventSlices = eventSlice.reducer;
