import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PageContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <PageContainer>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </PageContainer>
  );
};
