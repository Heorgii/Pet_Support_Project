import styled from 'styled-components';
import { IoReloadCircle } from 'react-icons/io5';

export const UserPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    padding-bottom: ${p => p.theme.space[13]}px;
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 736px; */
    padding-bottom: ${p => p.theme.space[14]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    /* max-width: 1280px; */
    padding-bottom: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
`;
export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: ${p => p.theme.space[9]}px;
  }
`;

export const UserDataContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.userDataShadow};
  margin-bottom: ${p => p.theme.space[10]}px;
  margin-top: 18px;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    position: relative;
    margin-bottom: ${p => p.theme.space[10]}px;
    margin-top: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[10]}px;
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: ${p => p.theme.space[7]}px;
    border-bottom-left-radius: ${p => p.theme.radii.none};
    border-top-left-radius: ${p => p.theme.radii.none};
    border-bottom-right-radius: ${p => p.theme.radii.big};
    border-top-right-radius: ${p => p.theme.radii.big};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-top: ${p => p.theme.space[7]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${p => p.theme.space[0]}px;
  }
  /* @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[9]}px;
    }

    @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[5]}px;
    } */
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: ${p => p.theme.borders.small} ${p =>
    p.theme.colors.accent}; */
  /* @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[9]}px;
    } 
    
    @media screen and (min-width: 1280px) {
        padding-left: ${p => p.theme.space[0]}px;
    }  */
`;

export const NavBtnsContainer = styled.div`
  display: flex;
  width: 80%;
  border-bottom: none;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const NavBtn = styled.button`
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  border-top: ${p => p.theme.borders.normal}
    ${p =>
      p.active === 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  border-left: ${p => p.theme.borders.normal}
    ${p =>
      p.active === 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  border-right: ${p => p.theme.borders.normal}
    ${p =>
      p.active === 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  border-bottom: ${p => p.theme.borders.normal}
    ${p =>
      p.active === 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  border-top-right-radius: ${p => p.theme.radii.small};
  border-top-left-radius: ${p => p.theme.radii.small};
  color: ${p =>
    p.active === 'pets' ? p.theme.colors.white : p.theme.colors.black};
  background-color: ${p =>
    p.active !== 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontHeight.l};
  letter-spacing: 0.04em;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  cursor: pointer;
  background-color: ${p =>
    p.active === 'pets' ? p.theme.colors.accent : p.theme.colors.transparent};
  transition: ${p => p.theme.transition.all};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.accent};
    /* border-bottom: none; */
  }

  @media (max-width: 400px) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]}px;
    }
  }

  @media (min-width: 768px) {
    border-bottom: none;
    font-size: ${p => p.theme.fontSizes[6]};
    padding-bottom: ${p => p.theme.space[2]}px;

    &:hover,
    :focus {
      border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
      border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
      border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    }
  }
`;

export const NavMessageBtn = styled.button`
  position: relative;
  outline: none;
  background-color: ${p =>
    p.active === 'messages'
      ? p.theme.colors.accent
      : p.theme.colors.transparent};
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-right: ${p => p.theme.borders.normal}
    ${p => p.theme.colors.transparent};
  border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-bottom: none;
  border-top-right-radius: ${p => p.theme.radii.small};
  border-top-left-radius: ${p => p.theme.radii.small};
  color: ${p =>
    p.active === 'messages' ? p.theme.colors.white : p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontHeight.l};
  letter-spacing: 0.04em;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  cursor: pointer;
  transition: ${p => p.theme.transition.all};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[6]};
    letter-spacing: 0;
  }

  @media (max-width: 400px) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]}px;
    }
  }

  &:hover,
  :focus {
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const ReloadMessagesBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const ReloadIcon = styled(IoReloadCircle)`
  fill: ${p => p.theme.colors.accent};
  width: 46px;
  height: auto;
  transition: ${p => p.theme.transition.all};

  ${ReloadMessagesBtn} &:hover {
    fill: ${p => p.theme.colors.hoveredAccent};
  }
`;

export const NewMessagesCount = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoveredAccent};
  border-radius: ${p => p.theme.radii.round};
  width: 30px;
  height: 30px;
`;
