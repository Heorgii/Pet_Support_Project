import { RegistrationButton } from './RegistrationBTN.styled';
import { NavLink } from 'react-router-dom';

export const RegistrationBTN = () => {
  return (
    <NavLink to="/register">
      <RegistrationButton>Registration</RegistrationButton>
    </NavLink>
  );
};
