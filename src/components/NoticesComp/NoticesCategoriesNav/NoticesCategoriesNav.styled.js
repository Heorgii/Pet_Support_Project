import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const ContainerCategoryBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 280px;
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    width: 475px;
  }
  @media screen and (min-width: 1280px) {
    width: 585px;
  }
`;
const BtnCategory = styled.button`
  cursor: pointer;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  margin: 6px 12px 6px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  padding: 0 28px;

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    /* width: 160px;
    margin: 0 0 0 0; */
  }
`;
export { BtnCategory, ContainerCategoryBtn };
