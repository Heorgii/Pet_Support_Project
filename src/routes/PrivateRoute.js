import { useSelector } from 'react-redux';
import {
  selectIsStateChange,
  selectIsRefreshing,
} from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsStateChange);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
