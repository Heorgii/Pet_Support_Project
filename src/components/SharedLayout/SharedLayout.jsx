import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PageContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PageContainer>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>
    </div>
  );
};
