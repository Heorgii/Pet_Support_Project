import React from 'react';
import { useSelector } from 'react-redux';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors'; 

export const MobileNav = ({ toggleMenu }) => {
const page = useSelector(paginationPage);
const perPage = useSelector(paginationPerPage);
  return (
    <MobileNavList>
      <NavItem to={`/news?perPage=${perPage}&page=${page}`} onClick={toggleMenu}>
        News
      </NavItem>
      <NavItem to={`/notices/sell?perPage=${perPage}&page=${page}`} onClick={toggleMenu}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={toggleMenu}>
        Our friends
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
const page = useSelector(paginationPage);
const perPage = useSelector(paginationPerPage);
  return (
    <NavList>
      <NavItem to={`/news?perPage=${perPage}&page=${page}`}>News</NavItem>
      <NavItem to={`/notices/sell?perPage=${perPage}&page=${page}`}>Find pet</NavItem>
      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
