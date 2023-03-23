import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div`
  display: ${props => props.display || 'none'};
  position: absolute;
  top: 39%; //75px;
  left: 45%; //126px;

  display: flex;
  align-items: center;

  max-width: 145px;
  padding: 12px;

  background-color: ${baseColor.colors.white};
  border: 1px solid ${baseColor.colors.orangeLight};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 39%; //96px;
    left: 40%; //135px;
  }
  @media screen and (min-width: 1280px) {
    top: 39%; //107px
    left: 45%; //178px
  }
`;

const Table = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Line = styled.tr`
  display: flex;
  gap: 12px;
`;

const Day = styled.th`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.black};
  cursor: pointer;
`;

const Time = styled.td`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.black};
  cursor: pointer;
`;

export { Overlay, Modal, Table, Line, Day, Time };
