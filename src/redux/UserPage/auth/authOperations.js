import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../auth/auth.js';

const eraseErrors = createAsyncThunk('auth/eraseErrors', () => {});

const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const result = await api.register(user);

    if (result._id) {
      const { email, password } = user;
      return await api.login({ email, password });
    }
  } catch (error) {
    let message = '';
    if (error.response.status === 409)
      message = 'User with the same email already registrated';
    if (error.response.status === 401) message = 'Data is wrong';
    if (error.response.status === 500)
      message = 'BackEnd dead, please try later';
    return thunkAPI.rejectWithValue(message);
  }
});

const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await api.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue('Wrong password or email');
  }
});

const update = createAsyncThunk('/update', async (updateData, thunkAPI) => {
  try {
    const result = await api.update(updateData);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout();
    return true;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const profile = createAsyncThunk('/profile', async (_id, thunkAPI) => {
  try {
    const result = await api.profile(_id);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const getUsers = createAsyncThunk('/getUsers', async (_, thunkAPI) => {
  try {
    const result = await api.getUsers();
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const addPet = createAsyncThunk('/addPet', async (pet, thunkAPI) => {
  try {
    const result = await api.addPet(pet);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const removePet = createAsyncThunk('/pets', async (_id, thunkAPI) => {
  try {
    const result = await api.removePet(_id);
    return { result, _id };
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const addFavorite = createAsyncThunk('/addFavorite', async (_id, thunkAPI) => {
  try {
    const result = await api.addFavorite(_id);
    return { result, _id };
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const removeFavorite = createAsyncThunk(
  '/removeFavorite',
  async (_id, thunkAPI) => {
    try {
      const result = await api.removeFavorite(_id);
      return { result, _id };
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  },
);

const authOperations = {
  register,
  login,
  logout,
  update,
  eraseErrors,
  profile,
  getUsers,
  addPet,
  removePet,
  addFavorite,
  removeFavorite,
};

export default authOperations;
