import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  addFavorite,
  removeFavorite,
} from './operations';

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
  isRefreshing: true,
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
        // const {
        //   userName,
        //   email,
        //   location,
        //   phone,
        //   birthday,
        //   avatarUrl,
        //   favorites,
        //   _id,
        // } = action.payload.data;

        // const user = {
        //   userName,
        //   email,
        //   location,
        //   phone,
        //   favorites,
        //   birthday,
        //   _id,
        //   avatarUrl,
        // };
        state.user = action.payload.data;
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
        // const { userName, email, location, birthday, phone, favorites, _id } =
        //   action.payload.data.user;

        // const user = {
        //   userName,
        //   email,
        //   location,
        //   phone,
        //   birthday,
        //   favorites,
        //   _id,
        // };
        state.user = action.payload.data.user;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(addFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = [...state.user.favorites, payload];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(removeFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = state.user.favorites.filter(
          _id => _id !== payload,
        );
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(removeFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
