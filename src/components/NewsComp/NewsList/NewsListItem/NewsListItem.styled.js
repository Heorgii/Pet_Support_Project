import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  
  align-content: center;
  height: 192px;
  padding: 12px 0;
 
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    max-width: 280px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
    height: 246px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
    height: 287px;
  }


`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;

const Text = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;
const Date = styled.div`
display: flex;
margin-top: 40px;
justify-content: space-between;
font-family: 'Manrope';
font-weight: 500;
font-size: 12px;
line-height: 1.333;
color: ${baseColor.colors.blackText};

@media screen and (min-width: 768px) {
  font-size: 14px;
  line-height: 1.357;
}

@media screen and (min-width: 1280px) {
  font-size: 16px;
  line-height: 1.375;
}
`;

const Link = styled.a`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.orangeLight};
  cursor: pointer;
  text-decoration: none;
  paddin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }

  &:hover,
  &:focus {
    color: ${baseColor.colors.orangeLight};
    text-decoration: underline;
  }
`;
const Ractangle = styled.span`{
    border-radius: 40px;
    width: 75%;
    height: 8px;
    background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
}`;

export { Item, Title, Info, TextWrapper, InfoWrapper, Text, Link, Ractangle, Date };