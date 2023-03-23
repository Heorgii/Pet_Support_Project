import React from 'react';
import { RegistrationButton } from './RegistrationBTN.styled';

export const RegistrationBTN = onClick => {
  return (
    <RegistrationButton to="/register" onClick={onClick}>
      Registration
    </RegistrationButton>
  );
};
