import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from 'redux/auth/operations';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  toggleFavoriteNotices,
  fetchOwnNotices,
  addOwnNotice,
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
      .addCase(toggleFavoriteNotices.pending, handlePending)
      .addCase(fetchOwnNotices.pending, handlePending)
      .addCase(addOwnNotice.pending, handlePending)
      .addCase(fetchNoticesByCategory.rejected, handleRejected)
      .addCase(fetchFavoriteNotices.rejected, handleRejected)
      .addCase(toggleFavoriteNotices.rejected, handleRejected)
      .addCase(fetchOwnNotices.rejected, handleRejected)
      .addCase(addOwnNotice.rejected, handleRejected)
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
      .addCase(toggleFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          notice => notice.id === action.payload.id,
        );
        state.items[index].favorite = !state.items[index].favorite;
      })
      .addCase(fetchOwnNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addOwnNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      });
    // .addCase(logOut.fulfilled, (state) => {
    //     state.items = [];
    //     state.error = null;
    //     state.isLoading = false;
    // })
  },
});

export const noticesReducer = noticesSlice.reducer;
