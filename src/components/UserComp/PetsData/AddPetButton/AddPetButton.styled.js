import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../../images/svg/addPetBtn/plus.svg';

export const AddPetWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1280px) {
    /* position: absolute; */
    right: 10px;
  }
`;

export const AddPetBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.big};
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  transition: ${p => p.theme.transition.all};

  &:hover,
  :focus {
    background: ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
  }
`;

export const AddPetDesc = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[4]};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontHeight.l};
  margin-right: ${p => p.theme.space[4]}px;
  transform: translateX(-100%);
  opacity: 0;
  transition: ${p => p.theme.transition.all};

  ${AddPetWrapper}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.white};
    margin: ${p => p.theme.space[0]}px;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  stroke: ${p => p.theme.colors.white};
`;
