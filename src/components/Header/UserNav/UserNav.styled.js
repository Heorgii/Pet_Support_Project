import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconUser } from 'images/svg/icon_user.svg';

const AccountButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  background-color: ${baseColor.colors.orangeLight};
  border: 2px solid ${baseColor.colors.orangeLight};
  color: ${baseColor.colors.white};

  font-family: 'Manrope';
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  // :hover,
  // :focus {
  //   background-color: ${baseColor.colors.orangeLight};
  //   color: ${baseColor.colors.white};
  // }
  // &.active {
  //   background-color: ${baseColor.colors.orangeLight};
  //   color: ${baseColor.colors.white};
  // }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const IconUser = styled(iconUser)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${baseColor.colors.white};
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export { AccountButton, IconUser };
