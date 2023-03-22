import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-width: 320px;

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

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
