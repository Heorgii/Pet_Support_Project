import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petsapi.cyclic.app/api`;
// axios.defaults.baseURL = `http://localhost:3030/api`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
      setAuthHeader(res.data.data.authToken);
      return res.data;
    } catch (error) {
      alert(`Something wrong`, error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  '/auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      setAuthHeader(data.data.authToken);
      return data;
    } catch (error) {
      alert(`Something wrong`, error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.post('/auth');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addFavorite = createAsyncThunk(
  '/auth/addFavorite',
  async (id, thunkAPI) => {
    try {
      await axios.post(`/notices/favorites/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeFavorite = createAsyncThunk(
  '/auth/removeFavorite',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/notices/favorites/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
