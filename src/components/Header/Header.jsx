import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from 'components/Header/Navigation/Navigation';
// import { UserNav } from "components/UserNav/UserNav";
import { Logo } from './Elements/Logo';
import { Menu } from './Elements/Menu';

export const Header = () => {
  return (
    <header>
      <Logo />

      <Navigation />
      <AuthNav />
      <Menu />
      {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
    </header>
  );
};
