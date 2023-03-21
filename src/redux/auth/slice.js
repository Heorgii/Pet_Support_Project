import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  nickName: null,
  email: null,
  stateChange: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
      email: payload.email,
      stateChange: payload.stateChange,
      isRefreshing: payload.isRefreshing,
    }),
    authSignOut: () => state,
  },
});

export const authReducer = authSlice.reducer;
