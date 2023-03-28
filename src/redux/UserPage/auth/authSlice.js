import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    _id: null,
    userName: null,
    email: null,
    city: null,
    birthday: null,
    phone: null,
    avatarUrl: null,
    favorites: null,
  },
  pets: [],
  users: [],
  profile: null,
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(authOperations.register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.login.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.pets = payload.pets;
        state.token = payload.token;
        state.isError = null;
        console.log(state.pets);
      })
      .addCase(authOperations.login.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
        state.isError = payload;
      })
      .addCase(authOperations.update.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.update.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user[Object.keys(payload.user)[0]] = Object.values(
          payload.user,
        )[0];
        state.isError = null;
      })
      .addCase(authOperations.update.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.pets = initialState.pets;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.token = initialState.token;
        state.isError = null;
      })
      .addCase(authOperations.eraseErrors.fulfilled, (state, _) => {
        state.isError = null;
      })
      .addCase(authOperations.profile.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.profile.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.profile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.getUsers.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.addPet.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.addPet.fulfilled, (state, { payload }) => {
        state.pets = [payload, ...state.pets];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.addPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.removePet.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.removePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.filter(pet => pet._id !== payload._id);
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.removePet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.addFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.addFavorite.fulfilled, (state, { payload }) => {
        state.favorites = [...state.user.favorites, payload];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.removeFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        authOperations.removeFavorite.fulfilled,
        (state, { payload }) => {
          state.user.favorites = state.user.favorites(
            _id => _id !== payload._id,
          );
          state.isLoading = false;
          state.isError = null;
        },
      )
      .addCase(authOperations.removeFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default authSlice.reducer;
