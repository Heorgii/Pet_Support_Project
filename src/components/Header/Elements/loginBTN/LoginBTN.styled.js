import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const LoginButton = styled.button`
  cursor: pointer;
  //   outline: none;
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  width: 95px;
  height: 35px;
  border: 2px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};

    outline: none;
  }
`;

export { LoginButton };
