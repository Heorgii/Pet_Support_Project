import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
  gap: 16px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Day = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};
  cursor: pointer;

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
    color: #f59256;
  }
`;
const Time = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};
  cursor: pointer;

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
  }
`;

export { Modal, Table, Day, Time };
