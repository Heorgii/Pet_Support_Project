import React from 'react';
import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';

import { Container } from './AuthNav.styled';

export const AuthNav = onClick => {
  return (
    <Container>
      <LoginBTN onClick={onClick} />
      <RegistrationBTN onClick={onClick} />
    </Container>
  );
};
