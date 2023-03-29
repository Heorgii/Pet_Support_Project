import { lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { ApiDocs } from '../ApiDocs/ApiDocs';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
// import initAxios from 'utils/initAxios';

const HomePage = lazy(() => import('pages/Home'));
const OurFriendsPage = lazy(() => import('pages/OurFriends'));
const NoticesPage = lazy(() => import('pages/Notices'));
const NewsPage = lazy(() => import('pages/News'));
const UserPage = lazy(() => import('pages/User'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  // initAxios();
  //  як буде правцювати бекєнд потрібно оновити дані юзера
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // const user = useSelector(selectUser)
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />

          <Route path="news" element={<NewsPage />} />

          <Route path="notices/:id" element={<NoticesPage />} />

          <Route
            path="notices/:favorite"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<NoticesPage />}
              />
            }
          />

          <Route
            path="notices/:own"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<NoticesPage />}
              />
            }
          />

          <Route path="friends" element={<OurFriendsPage />} />

          <Route
            path="api-docs"
            element={
              <RestrictedRoute redirectTo="api-docs" component={<ApiDocs />} />
            }
          />

          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/register" component={<UserPage />} />
            }
          />

          {/* <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          /> */}

          {/* <Route
            path="register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          /> */}
          {/* 
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/user" 
              component={<LoginPage />} />
            }
          /> */}

          {/* <Route
            path="login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/" />
            }
          /> */}

          {/* <Route path="news" element={<NewsPage />} /> */}
          {/* <Route
            path="news"
            element={
              <RestrictedRoute component={<NewsPage />} redirectTo="/" />
            }
          /> */}

          {/* <Route path="notices/" element={
          <RestrictedRoute component={<NoticesPage />} 
          redirectTo="/" />} /> */}
          {/* <Route path="notices/:id" element={<NoticesPage />} /> */}
          {/* <Route
            path="notices/:id"
            element={
              <RestrictedRoute component={<NoticesPage />} redirectTo="/" />
            }
          />
          <Route
            path="notices/:favorite"
            element={
              <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
            }
          />
          <Route
            path="notices/:own"
            element={
              <PrivateRoute component={<NoticesPage />} redirectTo="/login" />
            }
          />

          <Route
            path="friends"
            element={
              <RestrictedRoute component={<OurFriendsPage />} redirectTo="/" />
            }
          /> */}
          {/* <Route path="friends" element={<OurFriendsPage />} /> */}

          {/* added kadulin */}
          {/* <Route
            path="api-docs"
            element={<RestrictedRoute redirectTo="/" component={<ApiDocs />} />}
          /> */}
          {/* <Route path="api-docs" element={<ApiDocs />} /> */}

          {/* <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          /> */}

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};
