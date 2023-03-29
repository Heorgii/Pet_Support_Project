import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {page: 1, perPage: 3},
  reducers: {
    addPage(state, action) {
      state.page = action.payload;
    },
    addPerPage(state, action) {
      state.perPage = action.payload;
    },
  },
});

export const { addPage, addPerPage } = paginationSlice.actions;