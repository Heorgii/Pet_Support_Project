import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { LoginBTN } from '../Elements/loginBTN/LoginBTN';
import { RegistrationBTN } from '../Elements/registrationBTN/RegistrationBTN';
import { AccountBTN } from '../Elements/accountBTN/AccountBTN';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {!isLoggedIn ? (
        <>
          <LoginBTN />
          <RegistrationBTN />
        </>
      ) : (
        <AccountBTN />
      )}
    </Container>
  );
};
