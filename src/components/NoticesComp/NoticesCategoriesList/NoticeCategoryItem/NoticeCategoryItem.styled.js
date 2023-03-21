import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
`;
const NoticesContainerItem = styled.div`
  display: block;
  width: 280px;
  padding: 60px 20px 40px;
  background-color: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 20px 0px 20px;
  }
`;
const ContainerCloseModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
`;
const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 28px;
  background: #fdf7f2;
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(50px);
`;
const ImgItem = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  outline: unset;
`;
const NoticeItemTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
`;
const BtnContact = styled.button`
  cursor: pointer;
  width: 95px;
  height: 35px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
`;
const BtnAddFavorits = styled.button`
  cursor: pointer;
  width: 95px;
  height: 35px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
`;
export {
  NoticesContainerItem,
  ContainerCloseModal,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnContact,
  BtnAddFavorits,
  BackDrop,
};
