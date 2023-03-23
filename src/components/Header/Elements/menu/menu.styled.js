import styled from 'styled-components';
import { ReactComponent as iconMenu } from 'images/svg/icon_menu.svg';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const Burger = styled(iconMenu)`
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
const CloseButton = styled(iconClose)`
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export { Burger, CloseButton };
