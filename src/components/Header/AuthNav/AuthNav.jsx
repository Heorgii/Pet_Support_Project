import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <LoginBTN></LoginBTN>
      <RegistrationBTN></RegistrationBTN>
    </Container>
  );
};
