import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';

const LoginButton = styled(NavLink)`
  padding: 8px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  background-color: ${baseColor.colors.white};
  border: 2px solid ${baseColor.colors.orangeLight};
  color: ${baseColor.colors.blackText};

  font-family: 'Manrope';
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  :hover,
  :focus {
    background-color: ${baseColor.colors.orangeLight};
    color: ${baseColor.colors.white};
  }
  &.active {
    background-color: ${baseColor.colors.orangeLight};
    color: ${baseColor.colors.white};
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    padding: 8.5px 28px;
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 28px;
    height: 48px;
    font-size: 20px;
    line-height: 27px;
  }
`;

export { LoginButton };
