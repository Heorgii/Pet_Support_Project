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
  border: none;
  cursor: pointer;

  &:hover,
  :focus {
  }
`;

export const AddPetDesc = styled.p`
  transform: translateX(-100%);
  opacity: 0;

  ${AddPetWrapper}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 767px) {
  }
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
`;
