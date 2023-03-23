import React from 'react';
import { NavList, NavItem } from './Nav.styled';

export const Nav = () => {
  return (
    <NavList>
      <NavItem to="/news"> News </NavItem>

      <NavItem to="/notices">Find pet</NavItem>

      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
