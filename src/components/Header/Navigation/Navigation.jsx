import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav } from 'components/Header/Nav/Nav';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { NavBlock, Container } from './Navigation.styled';
import { Menu } from '../Elements/menu/Menu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <NavBlock>
        <Nav />
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </NavBlock>
      <Menu />
    </Container>
  );
};
