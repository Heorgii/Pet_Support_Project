import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
const BtnCategory = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  cursor: pointer;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  padding: 0 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  &.active {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
  }
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  /* border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white}; */
  margin: 6px 12px 6px 0;

  &:hover,
  &:focus {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    outline: none;
  }
`;
export { BtnCategory, ContainerCategoryBtn, StyledLi };
