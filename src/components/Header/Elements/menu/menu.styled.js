import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

import { ReactComponent as iconMenu } from 'images/svg/icon_menu.svg';

const Burger = styled(iconMenu)`
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const MobileMenuSection = styled.div`
  position: fixed;
  top: 0px;
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
    // max-height: 50%;
    transform: translateX(0);
  }
  // @media screen and (min-width: 768px) {
  //   top: 72px;
  // }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export { Burger, MobileMenuSection };
