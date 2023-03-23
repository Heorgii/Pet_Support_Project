import { useSelector } from 'react-redux';
import { getUsers } from 'redux/auth/selectors';

export const useAuth = () => {
  const users = useSelector(getUsers);

  return {
    users,
  };
};
