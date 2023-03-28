import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Field, Form } from 'formik';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
`;

export const ErrBox = styled.div`
  /* position: absolute; */
  /* white-space: nowrap;
  bottom: 0px;
  left: 15px; */
  color: #e53e3e;
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  line-height: 1.4;
  /* letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    left: 32px;
  } */
`;

const UserPetContainerItem = styled(Form)`
  position: relative;
  display: block;
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
  cursor: pointer;
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

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PetsItemTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;;
  }
`;

const InfoList = styled.div`
  overflow: hidden;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const InfoList2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const InfoListLable = styled.label`
  margin-bottom: 16px;
  &:last-child{
    margin-bottom: 0px;
  }
`;

const InfoListInput = styled(Field)`
  background: #FDF7F2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  width: 100%;
  padding: 11px 20px 11px 14px; 


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
`;

export const FieldItemFile = styled.input`
  all: unset;
  height: 208px;
  width: 208px;

  margin-bottom: 28px;
  background-color: ${baseColor.colors.mainBg};
  border-radius: 20px;
  outline: none;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA3MSA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQ5OTkgNTkuMTY2M1YzNS40OTk3TTM1LjQ5OTkgMzUuNDk5N1YxMS44MzNNMzUuNDk5OSAzNS40OTk3SDU5LjE2NjZNMzUuNDk5OSAzNS40OTk3SDExLjgzMzMiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+);
  background-size: 71px, 71px;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 500ms ease;

  color: transparent;
  &:hover {
    outline: 3px solid ${baseColor.colors.orangeLight};
  }
  &:focus {
    outline: none;
  }

  &::file-selector-button {
    display: none;
  }

  &::file-selector-text {
    display: none;
  }

  @media screen and (min-width: 768px) {
    height: 182px;
    width: 182px;
  }
`;

export const ImgTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px){
    font-size: 20px;
    line-height: 27px;  
  }
`;

const InfoListTextArea = styled.textarea`
  background: #FDF7F2;
  border: 1px solid ${baseColor.colors.orangeLight};
  border-radius: 20px;
  padding: 12px 0 0 14px;
  width: 240px;
  height: 100px;
  resize: none;

  @media screen and (min-width: 768px){
    width: 394px;
    height: 116px;
  }
  &:hover,
  &:focus{
    border-color: rgb(255, 97, 1);
    outline: none;
  }

`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 768px){
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;

const ButtonFirst = styled.button`
  background: ${baseColor.colors.orangeLight};
  border-radius: 40px;
  border-color: transparent;
  margin-bottom: 12px;
  transform: scale(1);
  transition: transform 0.5s ease 0s;
  cursor: pointer;

  &:hover,
  &:focus{
    transform: scale(1.05);
    transition: transform 0.5s ease 0s;
  }

  @media screen and (min-width: 768px){
    margin-bottom: 0;
    margin-left: 20px;
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

  &:hover,
  &:focus{
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

  @media screen and (min-width: 768px){
    padding: 8.5px 66.5px ;
    font-size: 20px;
    line-height: 27px;
  }
`;

const ButtonText2 = styled.p`
  padding: 9px 92px;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px){
    padding: 8.5px 55px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const ButtonBackText = styled.p`
  padding: 9px 101px;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px){
    padding: 8.5px 55px;
    font-size: 20px;
    line-height: 27px;
  }
`;

export {
  UserPetContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  PetsItemTitle,
  BackDrop,
  InfoList,
  InfoListLable,
  InfoListInput,
  InfoListText,
  InfoListTextArea,
  ButtonBox,
  ButtonFirst,
  ButtonSecond,
  ButtonText,
  ButtonText2,
  ButtonBackText,
};
