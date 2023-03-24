import React from 'react';
import { MobileNavList, NavList, NavItem } from './Nav.styled';

export const MobileNav = onClick => {
  return (
    <MobileNavList>
      <NavItem to="/news" onClick={onClick}>
        News
      </NavItem>
      <NavItem to="/notices" onClick={onClick}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={onClick}>
        Our friends
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = onClick => {
  return (
    <NavList>
      <NavItem to="/news" onClick={onClick}>
        News
      </NavItem>
      <NavItem to="/notices" onClick={onClick}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={onClick}>
        Our friends
      </NavItem>
    </NavList>
  );
};
