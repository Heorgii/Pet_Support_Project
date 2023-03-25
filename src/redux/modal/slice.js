import { createSlice } from '@reduxjs/toolkit';

const state = { modal: null, id: null };

export const modalSlice = createSlice({
  name: 'modal',
  initialState: state,
  reducers: {
    addModal: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    cleanModal: () => state,
  },
});
export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
