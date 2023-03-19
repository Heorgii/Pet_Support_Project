import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchOwnNotices,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.pending, handlePending)
      .addCase(fetchFavoriteNotices.pending, handlePending)
      .addCase(fetchOwnNotices.pending, handlePending)
      .addCase(fetchNoticesByCategory.rejected, handleRejected)
      .addCase(fetchFavoriteNotices.rejected, handleRejected)
      .addCase(fetchOwnNotices.rejected, handleRejected)
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchOwnNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });
    // .addCase(logOut.fulfilled, (state) => {
    //     state.items = [];
    //     state.error = null;
    //     state.isLoading = false;
    // })
  },
});

export const noticesReducer = noticesSlice.reducer;
