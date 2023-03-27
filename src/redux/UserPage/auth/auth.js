import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'http://localhost:3030/api',
  baseURL: 'https://petsapi.cyclic.app/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async user => {
  const { data } = await instance.post('/register', user);
  setToken(data.token);
  return data.user;
};

export const login = async user => {
  const { data } = await instance.post('/login', user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  await instance.get('/logout');
  setToken(null);
  return true;
};

export const update = async updateData => {
  const { data } = await instance.patch('/user', updateData);
  return data;
};

export const profile = async _id => {
  const { data } = await instance.get(`/profile/${_id}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await instance.get('/user');
  return data;
};

export const addPet = async pet => {
  const { data } = await instance.post('/pets', pet);
  return data.pet;
};

export const removePet = async _id => {
  const { data } = await instance.delete(`/pets/${_id}`);
  return data;
};
