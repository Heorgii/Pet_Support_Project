import React, { useState } from 'react';
import { LoginButton } from './LoginBTN.styled';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const LoginBTN = () => {
  const [isActive, setIsActive] = useState(false);

  const active = ({ isActive }) => {
    setIsActive(isActive ? true : false);

    return {
      textDecoration: 'none',
    };
  };

  return (
    <NavLink to="/login" style={active}>
      <LoginButton
        style={{
          backgroundColor: isActive && baseColor.colors.orangeLight,
          color: isActive && baseColor.colors.white,
        }}
      >
        Login
      </LoginButton>
    </NavLink>
  );
};
