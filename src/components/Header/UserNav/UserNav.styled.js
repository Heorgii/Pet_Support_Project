import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }

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
const NavItemTitle = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: ${baseColor.colors.textUserNav};

  &:hover {
    color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: ${baseColor.colors.orangeLight};
  }
`;
export { NavList, NavItem, NavItemTitle };
