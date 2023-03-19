import { LoginButton } from './LoginBTN.styled';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';
const setActive = ({ isActive }) => ({
  color: isActive ? baseColor.colors.orangeLight : baseColor.colors.textUserNav,
});

export const LoginBTN = () => {
  return (
    <NavLink to="/login" style={setActive}>
      <LoginButton>Login</LoginButton>
    </NavLink>
  );
};
