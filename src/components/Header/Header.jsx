import { AuthNav } from './AuthNav/AuthNav';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';
import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
import { UserNav } from './UserNav/UserNav';

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </NavLink>
        <UserNav></UserNav>
      </LeftContainer>
      <RightContainer>
        <AuthNav></AuthNav>
        <Menu />
      </RightContainer>

      {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
    </HeaderContainer>
  );
};
