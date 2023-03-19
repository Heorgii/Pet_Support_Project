import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const RegistrationButton = styled.button`
  margin-left: 12px;
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
  cursor: pointer;
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  width: 144px;
  height: 35px;
  border: 2px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;

  &:hover {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    background-color: ${baseColor.colors.orangeLight};
    color: ${baseColor.colors.white};
  }
`;
export { RegistrationButton };
