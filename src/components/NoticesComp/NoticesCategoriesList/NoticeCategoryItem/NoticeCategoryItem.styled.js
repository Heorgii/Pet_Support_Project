import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
  margin-bottom: 32px;
`;
const NoticesContainerItem = styled.div`
  position: relative;
  display: block;
  width: 280px;
  padding: 0 0 12px 0;
  background-color: #ffffff;
  border-radius: 0px 0px 20px 20px;

  @media screen and (min-width: 768px) {
    /* width: 704px;
    padding: 32px 20px 32px 20px; */
  }
`;

const ContainerStatus = styled.div`
  position: absolute;
  top: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 28px;
  background: #fdf7f2;
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(50px);
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
`;
const BtnForFavorite = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  outline: none;
  border: none;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 768px) {
    /* width: 670px;
    display: flex; */
  }
`;
const ContainerInfo = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 670px;
    display: flex;
  }
`;
const ImgItem = styled.img`
  width: 280px;
  height: 288px;
  outline: unset;
  @media screen and (min-width: 768px) {
    /* width: 288px;
    height: 328px;
    margin-right: 20px; */
  }
`;
const NoticeItemTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 20px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const NoticeContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: end;
    flex-direction: row-reverse;
    margin-top: 32px;
  }
`;
const BtnLearnMore = styled.button`
  cursor: pointer;
  width: 248px;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  margin: 40px 0 12px;

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0 0 0 0;
  }
`;
const BtnDelete = styled.button`
  cursor: pointer;
  width: 248px;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orange};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: #fff;
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0 12px 0 0;
  }
`;
const TdTable = styled.td`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  min-width: 115px;

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const TdTable2 = styled.td`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  min-width: 115px;

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const Table = styled.table`
  width: 240px;
  display: flex;
  overflow: hidden;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    /* margin-top: 20px; */
  }
`;

export {
  NoticesContainerItem,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnLearnMore,
  BtnDelete,
  ItemContainer,
  Table,
  TdTable,
  TdTable2,
  NoticeContainerButton,
  BtnForFavorite,
};
