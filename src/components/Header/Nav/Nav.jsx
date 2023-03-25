import React from 'react';
import { MobileNavList, NavList, NavItem } from './Nav.styled';

export const MobileNav = togleMenu => {
  return (
    <MobileNavList>
      <NavItem to="/news" onClick={togleMenu}>
        News
      </NavItem>
      <NavItem to="/notices" onClick={togleMenu}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={togleMenu}>
        Our friends
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = togleMenu => {
  return (
    <NavList>
      <NavItem to="/news" onClick={togleMenu}>
        News
      </NavItem>
      <NavItem to="/notices" onClick={togleMenu}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={togleMenu}>
        Our friends
      </NavItem>
    </NavList>
  );
};
