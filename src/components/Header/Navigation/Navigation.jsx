import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { NavContainer } from './Navigation.styled';
export const Navigation = () => {
  return (
    <NavContainer>
      <UserNav />
      <AuthNav />
    </NavContainer>
  );
};
