import React, { useState } from 'react';
import { RegistrationButton } from './RegistrationBTN.styled';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const RegistrationBTN = () => {
  const [isActive, setIsActive] = useState(false);

  const active = ({ isActive }) => {
    setIsActive(isActive ? true : false);

    return {
      textDecoration: 'none',
    };
  };
  return (
    <NavLink to="/register" style={active}>
      <RegistrationButton
        style={{
          backgroundColor: isActive && baseColor.colors.orangeLight,
          color: isActive && baseColor.colors.white,
        }}
      >
        Registration
      </RegistrationButton>
    </NavLink>
  );
};
