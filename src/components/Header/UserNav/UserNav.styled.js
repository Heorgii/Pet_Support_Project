import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const NavList = styled.ul`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-left: 80px;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 80px;
  }
`;

const NavItemTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }

  color: ${baseColor.colors.textUserNav};

  &:hover {
    color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: ${baseColor.colors.orangeLight};
  }
`;
export { NavList, NavItem, NavItemTitle };
