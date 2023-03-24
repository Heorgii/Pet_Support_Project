import React from 'react';
import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';

import { MobileContainer, Container } from './AuthNav.styled';

export const MobileAuthNav = onClick => {
  return (
    <MobileContainer>
      <LoginBTN onClick={onClick} />
      <RegistrationBTN onClick={onClick} />
    </MobileContainer>
  );
};

export const AuthNav = onClick => {
  return (
    <Container>
      <LoginBTN onClick={onClick} />
      <RegistrationBTN onClick={onClick} />
    </Container>
  );
};
