import React, { useState } from 'react';
import { LoginButton } from './LoginBTN.styled';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const LoginBTN = () => {
  const [hover, setHover] = useState(false);

  const onMouse = () => (hover ? setHover(false) : setHover(true));

  const setActive = ({ isActive }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor:
      isActive || hover ? baseColor.colors.orangeLight : baseColor.colors.white,
    border: '2px solid #F59256',
    borderRadius: 40,
    color:
      isActive || hover ? baseColor.colors.white : baseColor.colors.textUserNav,
    textDecoration: 'none',
  });

  return (
    <LoginButton>
      <NavLink
        to="/login"
        style={setActive}
        onMouseOver={onMouse}
        onMouseOut={onMouse}
      >
        Login
      </NavLink>
    </LoginButton>
  );
};

// {
//   "terminal.integrated.automationProfile.linux": {},
//   "terminal.integrated.defaultProfile.windows": "Git Bash",
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "editor.formatOnSave": true,
//   "files.autoSave": "onFocusChange",
//   "workbench.iconTheme": "material-icon-theme",
//   "workbench.startupEditor": "none"
// }
