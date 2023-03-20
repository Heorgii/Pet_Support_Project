import styled from 'styled-components';
import { ReactComponent as Pencil } from '../../../images/icons/userData/pencil.svg';
import { ReactComponent as CheckMark } from '../../../images/icons/userData/checkMark.svg';

export const UserDataItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
  }
`;

export const UserDataItemInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDataItemLabel = styled.label`
  display: block;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.33;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.8;
  }
`;

export const UserDataItemInput = styled.input`
  box-sizing: border-box;
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.thin};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p =>
    p.disabled ? p.theme.colors.white : p.theme.colors.background};
  border: ${p => (p.disabled ? p.theme.borders.small : p.theme.borders.none)};
  border-color: ${p =>
    p.disabled ? 'transparent' : p.theme.colors.inputColor};

  :focus {
    outline-color: ${p => p.theme.colors.inputColor};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.8;
    width: 216px;
    height: 32px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Error = styled.div`
  color: ${p => p.theme.colors.hoveredAccent};
  font-size: 10px;
  line-height: ${p => p.theme.fontHeight.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  border: ${p => p.theme.borders.small} ${p => p.theme.colors.hoveredAccent};
  background-color: ${p => p.theme.colors.background};

  padding: 1px ${p => p.theme.space[3] + 'px'};
  box-shadow: ${p => p.theme.shadows.mainShadow};

  border-radius: ${p => p.theme.radii.big};

  position: absolute;
  bottom: -10px;
  right: 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[0]};
  }
`;

export const UserDataItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  background: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
  border-color: transparent;
  margin-left: 9px;
  cursor: pointer;
  transform: ${p => p.theme.transition.all};

  :hover svg {
    fill: ${p =>
      p.disabled ? p.theme.colors.accent : p.theme.colors.hoveredAccent};
  }

  :disabled {
    svg {
      fill: ${p => p.theme.colors.inputColor};
    }
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-left: ${p => p.theme.space[7]}px;
  }
`;

export const PensilStyle = styled(Pencil)`
  width: 14px;
  height: 14px;
  fill: ${p => p.theme.colors.accent};
  transform: ${p => p.theme.transition.all};

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;
  }
`;

export const CheckMarkStyle = styled(CheckMark)`
  width: 14px;
  height: 14px;
  fill: ${p => p.theme.colors.accent};
  transform: ${p => p.theme.transition.all};

  &:hover,
  :focus {
    fill: ${p => p.theme.colors.hoveredAccent};
  }

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;
  }
`;
