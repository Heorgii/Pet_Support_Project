import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 192px;
  padding: 12px 0;
  background-color: ${baseColor.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
    height: 246px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
    height: 287px;
  }

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const Title = styled.a`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.orangeLight};
  cursor: pointer;

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

const Link = styled.a`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};
  cursor: pointer;
  text-decoration: none;

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

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 320px) {
    width: 110px;
    height: 78px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
  }

  @media screen and (min-width: 1280px) {
    width: 120px;
    height: 85px;
  }
`;

export { Item, Title, Info, TextWrapper, InfoWrapper, Text, Link, Image };
