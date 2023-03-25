import { useSelector } from 'react-redux';
import {
  getIsError,
  getIsLoggedIn,
  getUserEmail,
  getUser,
  getPets,
  getProfile,
  getToken,
  getUsers,
} from 'redux/UserPage/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isError = useSelector(getIsError);
  const userEmail = useSelector(getUserEmail);
  const user = useSelector(getUser);
  const pets = useSelector(getPets);
  const profile = useSelector(getProfile);
  const token = useSelector(getToken);
  const users = useSelector(getUsers);

  return {
    isLoggedIn,
    isError,
    userEmail,
    user,
    pets,
    profile,
    token,
    users,
  };
};
