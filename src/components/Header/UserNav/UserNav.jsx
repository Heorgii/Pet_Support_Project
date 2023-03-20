import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';

import { NavList, NavItem, NavItemTitle } from './UserNav.styled';
const setActive = ({ isActive }) => ({
  color: isActive ? baseColor.colors.orangeLight : baseColor.colors.textUserNav,
  textDecoration: 'none',
});

export const UserNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavItemTitle>
          <NavLink to="/news" style={setActive}>
            News
          </NavLink>
        </NavItemTitle>
      </NavItem>

      <NavItem>
        <NavItemTitle>
          <NavLink to="/notices" style={setActive}>
            Find pet
          </NavLink>
        </NavItemTitle>
      </NavItem>

      <NavItem>
        <NavItemTitle>
          <NavLink to="/friends" style={setActive}>
            Our friends
          </NavLink>
        </NavItemTitle>
      </NavItem>
    </NavList>
  );
};
