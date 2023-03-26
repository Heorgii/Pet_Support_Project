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

const UserPetContainerItem = styled.div`
  position: relative;
  display: block;
  width: 280px;
  padding: 17px 20px 43px 20px;
  background-color: ${baseColor.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 20px 40px 20px;
  }
`;

const ContainerPositionForCloseModal = styled.div`
  display: flex;
  justify-content: end;
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
  margin-bottom: 6px;
  z-index: 99;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 12px;
    right: 20px;
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

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoList = styled.ul`
  width: 240px;
  overflow: hidden;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

const InfoListText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  font-family: 'Manrope';
  margin-bottom: 8px;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px){
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const InfoListInput = styled.input`
  background: #FDF7F2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  width: 100%;
  padding: 11px 20px 11px 14px; 
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 28px;
    width: 100%;
    padding: 11px 323px 11px 16px; 
  }

  &:hover,
  &:focus{
    border-color: rgb(255, 97, 1);
    outline: none;
  }

  &:last-child{
    margin-bottom: 0px;
  }
`;

const PetsItemTitle = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonFirst = styled.button`
  background: ${baseColor.colors.orangeLight};
  border-radius: 40px;
  border-color: transparent;
  margin-top: 40px;
  margin-bottom: 12px;
  transform: scale(1);
  transition: transform 0.5s ease 0s;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease 0s;
  }
`;

const ButtonSecond = styled.button`
  background: ${baseColor.colors.white};
  border: 2px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;
  transform: scale(1);
  transition: transform 0.5s ease 0s;
  cursor: pointer;
  position: relative;
    overflow: hidden;
  &:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease 0s;
  }
`;

const ButtonText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  padding: 9px 101px;
  color: ${baseColor.colors.white};
`;
const ButtonText2 = styled.p`
  padding: 9px 92px;
  color: ${baseColor.colors.black};
`;

const NoticeContainerButtom = styled.div`
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

const Comments = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

const MainComments = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

const ContainerComments = styled.div`
  margin-top: 28px;
`;

export {
  UserPetContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  ContainerStatus,
  PetsItemTitle,
  BackDrop,
  InfoList,
  InfoListInput,
  InfoListText,
  Comments,
  ButtonBox,
  ButtonText,
  ButtonText2,
  MainComments,
  ContainerComments,
  NoticeContainerButtom,
  ButtonFirst,
  ButtonSecond,
};
