import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    userName: null,
    email: null,
    location: null,
    phone: null,
    favorites: null,
    _id: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        // state.user = action.payload.data.user;
        // state.token = action.payload.data.user.authToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { userName, email, location, phone, favorites, _id } =
          action.payload.data;

        const user = {
          userName,
          email,
          location,
          phone,
          favorites,
          _id,
        };
        state.user = user;
        state.token = action.payload.data.authToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { userName, email, location, phone, favorites, _id } =
          action.payload.data.user;

        const user = {
          userName,
          email,
          location,
          phone,
          favorites,
          _id,
        };
        console.log(user);
        state.user = user;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
