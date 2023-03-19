import styled from 'styled-components';
import { baseColor } from '../../baseStyles/Variables.styled.js';

const FormSearch = styled.form`
  position: relative;
`;
const FormButton = styled.button`
  background-color: ${baseColor.colors.while};
  border-color: ${baseColor.colors.while};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  right: 10px;
  top: 8px;
`;
const SpanButton = styled.span`
  fill: ${baseColor.colors.blackText};
  background-color: ${baseColor.colors.while};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormInput = styled.input`
  width: 280px;
  height: 40px;
  background-color: ${baseColor.colors.while};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding: 9px 12px;
  @media screen and (min-width: 768px) {
    width: 608px;
    height: 44px;
    padding: 9px 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    height: 44px;
    padding: 9px 20px;
  }
`;
export { FormButton, SpanButton, FormInput, FormSearch };
