import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigation } from './MobileMenu.styled';
import { MobileAuthNav } from 'components/Header/AuthNav/AuthNav';
import { MobileUserNav } from 'components/Header/UserNav/UserNav';
import { MobileNav } from 'components/Header/Nav/Nav';
// import { Header } from 'components/Header/Header';

export const MobileMenu = onClick => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Navigation>
      {/* <Header /> */}
      {isLoggedIn ? (
        <MobileUserNav onClick={onClick} />
      ) : (
        <MobileAuthNav onClick={onClick} />
      )}
      <MobileNav onClick={onClick} />
    </Navigation>
  );
};
