import React from 'react';
import { LoginButton } from './LoginBTN.styled';

export const LoginBTN = onClick => {
  return (
    <LoginButton to="/login" onClick={onClick}>
      Login
    </LoginButton>
  );
};
