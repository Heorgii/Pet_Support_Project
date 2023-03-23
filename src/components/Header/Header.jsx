import React from 'react';
import { Logo } from './Elements/logo/Logo';
import { Navigation } from 'components/Header/Navigation/Navigation';

import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};
