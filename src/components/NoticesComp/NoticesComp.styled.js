import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 42px 20px 100px 20px;

  @media screen and (min-width: 768px) {
    padding: 88px 32px 100px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 16px 200px 16px;
  }
`;

export const WrapperNav = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-beyween;
  }

  @media screen and (min-width: 1280px) {
  }
`;
