import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Delete } from '../../../../../images/svg/petsitem/delete.svg';

export const PetsItemWrapper = styled.li`
  position: relative;
  background-color: ${baseColor.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 32px;
  padding-bottom: 12px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 20px;

    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }

  @media screen and (min-width: 1600px) {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;
export const PetsItemImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-bottom: 100px;
    margin-left: 100px;
    margin-right: 16px;
  }
`;

export const PetsItemInfoBlock = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    min-width: 471px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 580px;
  }
`;

export const PetsItemDeleteBtn = styled.button`
  position: absolute;
  top: 270px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: ${baseColor.colors.white};
  border-color: transparent;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 150ms linear;

  :hover svg {
    fill: ${baseColor.colors.orange};
  }

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 28px;
    width: 44px;
    height: 44px;
    background: ${baseColor.colors.mainBg};
  }
`;

export const DeleteIcon = styled(Delete)`
  width: 28px;
  height: 28px;
  fill: ${baseColor.colors.logout};
  transition: all 150ms linear;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  &:hover,
  :focus {
    fill: ${baseColor.colors.orange};
  }
`;

export const PetsItemDesc = styled.p`
  color: ${baseColor.colors.black};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.04em;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.37;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const PetsItemSpan = styled.span`
  color: ${baseColor.colors.black};
  font-weight: 500;
`;
