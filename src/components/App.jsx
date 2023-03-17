import { Home } from "pages/Home";
// import { lazy } from "react";
// import { HelmetProvider } from "react-helmet-async";
// import { Route, Routes } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout";

// const HomePage = lazy(() => import('../pages/Home'));
// const OurFriendsPage = lazy(() => import('../pages/OurFriends'));
// const NoticesPage = lazy(() => import('../pages/Notices'));
// const NewsPage = lazy(() => import('../pages/News'));
// const UserPage = lazy(() => import('../pages/User'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));


export const App = () => {
  return (
    <div>
      {/* <HelmetProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
            // element={
              //   <RestrictedRoute
              //     redirectTo="/contacts"
              //     component={<RegisterPage />}
              //   />
              // }
              />
              < Route
              path="/login"
            // element={
              //   <RestrictedRoute
              //     redirectTo="/contacts"
              //     component={<LoginPage />}
              //   />
              // }
              />
              < Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HelmetProvider> */}
      <Home />
    </div>
  );
};

