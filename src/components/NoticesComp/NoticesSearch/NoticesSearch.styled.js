import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const Title = styled.h1`
font-family: "Manrope", sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 1.375;
text-align: center;
color: ${baseColor.colors.blackText};

margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
