import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: {value: ""},
  reducers: {
    addQuery(state, action) {
      state.value = action.payload.toLowerCase()
    },
  },
});

export const { addQuery } = querySlice.actions;