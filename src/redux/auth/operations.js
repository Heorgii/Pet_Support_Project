import { authSlice } from './slice';
const { v4: uuidv4 } = require('uuid');

export const authSignUpUser = userSignIn => async (dispatch, getState) => {
  try {
    const userId = uuidv4();
    const { nickName, email } = userSignIn;
    const stateChange = true;
    const isRefreshing = true;
    await dispatch(
      authSlice.actions.updateUserProfile({
        userId,
        nickName,
        email,
        stateChange,
        isRefreshing,
      }),
    );
  } catch (error) {
    console.log('error', error);
    alert('Помилка реєстрції', error.message);
  }
};

export const logIn = userSignIn => async (dispatch, getState) => {
  try {
    const userId = uuidv4();
    const { nickName, email } = userSignIn;
    const stateChange = true;
    const isRefreshing = true;
    await dispatch(
      authSlice.actions.updateUserProfile({
        userId,
        nickName,
        email,
        stateChange,
        isRefreshing,
      }),
    );
  } catch (error) {
    console.log('error', error);
    alert('Помилка', error.message);
  }
};

export const logOut = async (dispatch, getState) => {
  try {
    await dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log('error', error);
    alert('Помилка', error.message);
  }
};

export const getUserProfile = () => {
  const userProfile = localStorage.getItem('userProfile');
  if (userProfile) {
    return JSON.parse(userProfile);
  }
  return null;
};

export const updateUserProfile = userData => {
  const userProfile = getUserProfile();
  const updatedUserProfile = { ...userProfile, ...userData };
  localStorage.setItem('userProfile', JSON.stringify(updatedUserProfile));
};
