import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: ${baseColor.colors.blackText};
  font-size: 28px;
  border: none;
  background-color: transparent;
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
const Burger = styled.div`
  position: relative;
  align-item: center;
  display: block;
  width: 30px;
  height: 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: ${baseColor.colors.blackText};
    border: 1px solid ${baseColor.colors.blackText};
    border-radius: 10px;

    width: 100%;
    height: 3px;
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    bottom: 0;
    left: 0;
  }
`;
const Span = styled.div`
  position: absolute;
  background-color: ${baseColor.colors.blackText};
  border: 1px solid ${baseColor.colors.blackText};
  border-radius: 10px;
  width: 100%;
  height: 3px;
  top: 8px;
`;
export { Container, Burger, Span };
