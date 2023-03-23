import styled from 'styled-components';
import { ReactComponent as Pencil } from '../../../../images/svg/userData/pencil.svg';
import { ReactComponent as CheckMark } from '../../../../images/svg/userData/checkMark.svg';

export const UserDataItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
  }

  @media screen and (min-width: 768px) {
  }
`;

export const UserDataItemInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDataItemLabel = styled.label`
  display: block;
  line-height: 1.33;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    line-height: 1.8;
  }
`;

export const UserDataItemInput = styled.input`
  box-sizing: border-box;
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 159px;
  height: 24px;
  padding: 4px 18px;

  :focus {
  }

  @media screen and (min-width: 768px) {
    line-height: 1.8;
    width: 216px;
    height: 32px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Error = styled.div`
  font-size: 10px;

  position: absolute;
  bottom: -10px;
  right: 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
  }
`;

export const UserDataItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-color: transparent;
  margin-left: 9px;
  cursor: pointer;

  :hover svg {
  }

  :disabled {
    svg {
    }
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const PensilStyle = styled(Pencil)`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
  }
`;

export const CheckMarkStyle = styled(CheckMark)`
  width: 14px;
  height: 14px;

  &:hover,
  :focus {
  }

  @media screen and (min-width: 768px) {
  }
`;
