import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from '../../../images/svg/logout/logout.svg';

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-left: auto;

  :hover svg {
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 24px;
    left: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  &:hover,
  :focus {
  }
`;

export const LogoutBtnText = styled.span`
  letter-spacing: 0.04em;

  &:hover,
  :focus {
  }
`;
