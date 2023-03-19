import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from './SharedLayout';
import { ApiDocs } from './ApiDocs/ApiDocs';

const HomePage = lazy(() => import('../pages/Home'));
// const OurFriendsPage = lazy(() => import('../pages/OurFriends'));
// const NoticesPage = lazy(() => import('../pages/Notices'));
// const NewsPage = lazy(() => import('../pages/News'));
// const UserPage = lazy(() => import('../pages/User'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  //  як буде правцювати бекєнд потрібно оновити дані юзера
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser)
  // useEffect(() => {
  //   if(user){dispatch(refreshUser(user))};
  // }, [dispatch, user]);

  return (
    <div>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<div>RegisterPage</div>}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<div>LoginPage</div>}
                />
              }
            />
            <Route path="news" element={<div>news</div>} />
            | <Route path="notices" element={<div>notices</div>} />
            <Route path="friends" element={<div>friends</div>} />
            {/* added kadulin */}
            <Route path="api-docs" element={<ApiDocs />} />
            <Route
              path="user"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<div>user</div>}
                />
              }
            />
            <Route
              path="*"
              element={
                <RestrictedRoute redirectTo="/" component={<HomePage />} />
              }
            />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
};
