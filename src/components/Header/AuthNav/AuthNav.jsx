import { NavLink } from 'react-router-dom';
import { LoginBTN } from '../Elements/LoginBTN';
import { RegistrationBTN } from '../Elements/RegistrationBTN';

export const AuthNav = () => {
  return (
    <div>
      <LoginBTN>{/* <NavLink to="/login">login</NavLink> */}</LoginBTN>
      <RegistrationBTN>
        {/* <NavLink to="/register">register</NavLink> */}
      </RegistrationBTN>
    </div>
  );
};
