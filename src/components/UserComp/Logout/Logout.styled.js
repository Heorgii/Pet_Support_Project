import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from '../../../images/svg/logout/logout.svg';

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${baseColor.colors.white};
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding-right: 12px;
  transform: all 150ms linear;

  :hover svg {
    stroke: ${baseColor.colors.orange};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 24px;
    left: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    margin-left: 16px;
    padding-right: 0px;
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  stroke: ${baseColor.colors.orangeLight};
  transition: all 150ms linear;

  &:hover,
  :focus {
    fill: ${baseColor.colors.orange};
  }
`;

export const LogoutBtnText = styled.span`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${baseColor.colors.logout};
  margin-left: 8px;
  transition: all 150ms linear;

  &:hover,
  :focus {
    color: ${baseColor.colors.orange};
  }
`;
