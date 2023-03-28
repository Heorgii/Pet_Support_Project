import axios from 'axios';

const setToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers.common.Authorization = '';
};

export const register = async user => {
  const { data } = await axios.post('/register', user);
  setToken(data.token);
  return data.user;
};

export const login = async user => {
  const { data } = await axios.post('/login', user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  setToken(null);
  await axios.post('/auth/logout');
  return true;
};

export const update = async updateData => {
  const { data } = await axios.patch('/user', updateData);
  return data;
};

export const profile = async _id => {
  const { data } = await axios.get(`/profile/${_id}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get('/user');
  return data;
};

export const addPet = async pet => {
  const { data } = await axios.post('/pets', pet);
  return data.pet;
};

export const removePet = async _id => {
  const { data } = await axios.delete(`/pets/${_id}`);
  return data;
};
