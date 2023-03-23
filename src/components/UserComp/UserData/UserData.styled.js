import styled from 'styled-components';
import { ReactComponent as EditCamera } from '../../../images/svg/userData/camera.svg';

export const UserDataContainer = styled.div`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* margin-left: 32px; */
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const UserDataImgWrapper = styled.div`
  @media screen and (min-width: 768px) {
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
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  line-height: 1.8;

  @media screen and (min-width: 768px) {
  }
`;

export const EditCameraStyle = styled(EditCamera)`
  margin-rigth: 2px;
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
    padding-bottom: 55px;
    width: 379px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserDataFormItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserDataLabel = styled.label`
  display: block;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const UserDataInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDataInput = styled.input`
  box-sizing: border-box;
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 159px;
  height: 24px;
  padding: 4px 18px;

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
  border-color: transparent;
  margin-left: 9px;
`;
