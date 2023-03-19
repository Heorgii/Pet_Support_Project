// import { NavLink } from 'react-router-dom';
import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <LoginBTN>{/* <NavLink to="/login">login</NavLink> */}</LoginBTN>
      <RegistrationBTN>
        {/* <NavLink to="/register">register</NavLink> */}
      </RegistrationBTN>
    </Container>
  );
};
