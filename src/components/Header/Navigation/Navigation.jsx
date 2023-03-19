import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 80px;
  }
`;
const NavItemTitle = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #181c27;

  &:hover {
    color: #f59256;
  }
  &:focus {
    color: #f59256;
  }
`;

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavItemTitle>News</NavItemTitle>
      </NavItem>
      <NavItem>
        <NavItemTitle>Find pet</NavItemTitle>
      </NavItem>
      <NavItem>
        <NavItemTitle>Our friends</NavItemTitle>
      </NavItem>
      {/* <NavLink to="/">Home</NavLink> */}
    </NavList>
  );
};
