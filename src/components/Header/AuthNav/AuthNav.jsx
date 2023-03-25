import React from 'react';
import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';

import { MobileContainer, Container } from './AuthNav.styled';

export const MobileAuthNav = toggleMenu => {
  return (
    <MobileContainer>
      <LoginBTN onClick={toggleMenu} />
      <RegistrationBTN onClick={toggleMenu} />
    </MobileContainer>
  );
};

export const AuthNav = toggleMenu => {
  return (
    <Container>
      <LoginBTN onClick={toggleMenu} />
      <RegistrationBTN onClick={toggleMenu} />
    </Container>
  );
};
