import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /notices/:categoryName
export const fetchNoticesByCategory = createAsyncThunk(
  'notices',
  async ({categoryName, params}, thunkAPI) => {
    try {
      const res = await axios.get(`/contacts/${categoryName}`, params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /notices/favorite
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

// POST @ /notices/favorite/:noticeId
export const toggleFavoriteNotices = createAsyncThunk(
  'notices/toggleFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/favorite/${noticeId}`);
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
      const response = await axios.get('/notices/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /notices/own
export const addOwnNotice = createAsyncThunk(
  'notices/addNotice',
  async (objNotice, thunkAPI) => {
    try {
      const response = await axios.post('/notices/own', objNotice);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

