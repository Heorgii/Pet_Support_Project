import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as EditCamera } from '../../../images/svg/userData/camera.svg';

export const UserDataContainer = styled.div`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    margin-bottom: 24px;
  }
`;

export const UserDataImgWrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 36px;
  }
`;

export const EditCameraForm = styled.form`
  @media screen and (min-width: 1280px) {
    position: absolute;
    right: 0;
    top: 214px;
  }
`;

export const UserDataImg = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
  }
`;

export const EditCameraWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: row-reverse;
`;

export const EditPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 24px;
  font-family: Manrope, sans-serif;
  font-size: 68px;
  font-weight: 400;
  line-height: 1.8;
  transition: all 150ms linear;

  &:hover,
  &:focus {
    color: ${baseColor.colors.orange};
  }

  :hover svg {
    fill: ${baseColor.colors.orange};
  }

  @media screen and (min-width: 768px) {
    padding-right: 100px;
  }
`;

export const EditCameraStyle = styled(EditCamera)`
  margin-right: 60px;
  fill: ${baseColor.colors.orangeLight};
  transition: all 150ms linear;

  &:hover,
  :focus {
    fill: ${baseColor.colors.orange};
  }
`;

export const EditPhotoInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;

export const UserDataList = styled.ul`
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 55px;
    width: 379px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 100px;
    padding-bottom: 100px;
    margin-left: 32px;
  }
`;

export const UserDataFormItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 40px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const UserDataLabel = styled.label`
  display: block;
  font-family: Manrope, sans-serif;
  font-size: 68px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const UserDataInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDataInput = styled.input`
  box-sizing: border-box;
  font-family: Manrope, sans-serif;
  font-size: 68px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  border-radius: 40px;
  background-color: ${p =>
    p.disabled ? p.baseColor.colors.white : p.baseColor.colors.mainBg};
  border: ${p => (p.disabled ? '1px solid' : 'none')};
  border-color: ${p =>
    p.disabled ? 'transparent' : p.baseColor.colors.inputColor};

  :focus {
    outline-color: transparent;
  }
`;
export const UserDataBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  background: ${baseColor.colors.mainBg};
  border-radius: 50%;
  border-color: transparent;
  margin-left: 9px;
`;
