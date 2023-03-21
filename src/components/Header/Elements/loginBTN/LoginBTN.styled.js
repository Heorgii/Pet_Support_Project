import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const LoginButton = styled.button`
  position: relative;
  margin-left: 12px;
  width: 95px;
  height: 35px;
  letter-spacing: 0.07em;
  border: 2px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

export { LoginButton };
