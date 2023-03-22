import React from 'react';
import { NavList, NavItem } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavList>
      <NavItem to="/news"> News </NavItem>

      <NavItem to="/notices">Find pet</NavItem>

      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
