import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from './SharedLayout';
import { ApiDocs } from './ApiDocs/ApiDocs';

const HomePage = lazy(() => import('../pages/Home'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends'));
const NoticesPage = lazy(() => import('../pages/Notices'));
const NewsPage = lazy(() => import('../pages/News'));
const UserPage = lazy(() => import('../pages/User'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

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
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />
            <Route
              path="/news"
              element={
                <RestrictedRoute redirectTo="/news" component={<NewsPage />} />
              }
            />

            <Route
              path="/notices"
              element={
                <RestrictedRoute
                  redirectTo="/notices"
                  component={<NoticesPage />}
                />
              }
            />

            <Route
              path="/friends"
              element={
                <RestrictedRoute
                  redirectTo="/friends"
                  component={<OurFriendsPage />}
                />
              }
            />

            {/* added kadulin */}
            <Route path="api-docs" element={<ApiDocs />} />

            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/register" component={<UserPage />} />
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
};
