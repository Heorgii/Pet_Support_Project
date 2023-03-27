import React from 'react';
import { MobileNavList, NavList, NavItem } from './Nav.styled';

export const MobileNav = ({ toggleMenu }) => {
  return (
    <MobileNavList>
      <NavItem to="/news" onClick={toggleMenu}>
        News
      </NavItem>
      <NavItem to="/notices/sell" onClick={toggleMenu}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={toggleMenu}>
        Our friends
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  return (
    <NavList>
      <NavItem to="/news">News</NavItem>
      <NavItem to="/notices/sell">Find pet</NavItem>
      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
