import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const SharedLayout = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
