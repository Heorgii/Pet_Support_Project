import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Delete } from '../../../../../images/svg/petsitem/delete.svg';

export const PetsItemWrapper = styled.li`
  position: relative;

  &:not(:last-child) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }

  @media screen and (min-width: 1600px) {
    &:not(:last-child) {
    }
  }
`;
export const PetsItemImg = styled.img`
  width: 240px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-color: transparent;
  cursor: pointer;

  :hover svg {
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const DeleteIcon = styled(Delete)`
  @media screen and (min-width: 768px) {
  }

  &:hover,
  :focus {
  }
`;

export const PetsItemDesc = styled.p`
  letter-spacing: 0.04em;

  &:not(:last-child) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
    }
  }
`;

export const PetsItemSpan = styled.span`
  color: ${baseColor.colors.blackText};
`;
