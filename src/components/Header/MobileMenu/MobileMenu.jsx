import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { Nav } from 'components/Header/Nav/Nav';
const viewPort = document.documentElement.clientWidth;

export const MobileMenu = onClick => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {viewPort >= 768 ? null : isLoggedIn ? (
        <UserNav onClick={onClick} />
      ) : (
        <AuthNav onClick={onClick} />
      )}
      <Nav onClick={onClick} />
    </>
  );
};
