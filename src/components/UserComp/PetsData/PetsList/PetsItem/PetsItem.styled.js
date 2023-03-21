import styled from 'styled-components';
import { ReactComponent as Delete } from '../../../../../images/svg/petsitem/delete.svg';

export const PetsItemWrapper = styled.li`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.userDataShadow};
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[10]}px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: ${p => p.theme.space[8]}px;

    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }

  @media screen and (min-width: 1600px) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  }
`;
export const PetsItemImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: ${p => p.theme.radii.normal};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-left: ${p => p.theme.space[0]}px;
    margin-right: ${p => p.theme.space[9]}px;
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
  right: ${p => p.theme.space[6]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: ${p => p.theme.colors.white};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.round};
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  cursor: pointer;
  transition: ${p => p.theme.transition.all};

  :hover svg {
    fill: ${p => p.theme.colors.hoveredAccent};
  }

  @media screen and (min-width: 768px) {
    top: ${p => p.theme.space[5]}px;
    right: ${p => p.theme.space[6]}px;
    width: 44px;
    height: 44px;
    background: ${p => p.theme.colors.background};
  }
`;

export const DeleteIcon = styled(Delete)`
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  fill: ${p => p.theme.colors.logout};
  transition: ${p => p.theme.transition.all};

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space[7]}px;
    height: ${p => p.theme.space[7]}px;
  }

  &:hover,
  :focus {
    fill: ${p => p.theme.colors.hoveredAccent};
  }
`;

export const PetsItemDesc = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.thin};
  line-height: ${p => p.theme.fontHeight.xl};
  letter-spacing: 0.04em;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[1]};
    line-height: ${p => p.theme.fontHeight.l};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes[3]};

    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[5]}px;
    }
  }
`;

export const PetsItemSpan = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
