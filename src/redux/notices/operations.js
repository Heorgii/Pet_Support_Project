import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /notices/:categoryName
export const fetchNoticesByCategory = createAsyncThunk(
  'notices',
  async (categoryName, thunkAPI) => {
    try {
      const res = await axios.get(`/contacts/${categoryName}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DET @ /notices/favorite
export const fetchFavoriteNotices = createAsyncThunk(
  'notices/favorite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/favorite');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// GET @ /notices/own
export const fetchOwnNotices = createAsyncThunk(
  'notices/own',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/notices/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

