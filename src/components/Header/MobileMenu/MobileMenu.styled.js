import { baseColor } from 'components/baseStyles/Variables.styled';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  // min-height: 100%;
  z-index: 999;
  // padding: 35px;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${baseColor.colors.mainBg};

  &.is-expanded {
    max-height: 100%;
    transform: translateX(0);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const Navigation = styled.div`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { Container, Navigation };