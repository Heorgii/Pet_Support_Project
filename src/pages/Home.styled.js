import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
const Container = styled.div`
  // outline: 1px solid black;
  // height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justifycontent: space-between;

  @media screen and (min-width: 1280px) {
    position: relative;
    flex-direction: row;
    height: 768px;
    max-width: 1280px;
  }
`;

const Title = styled.h1`
  padding: 0px 20px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${baseColor.colors.blackText};
  // width: 100%;
  margin-top: 60px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 68px;
    line-height: 100px;
    margin-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 68px;
    line-height: 100px;
    margin-top: 92px;
  }
`;
const Images = styled.div`
  position: relative;
  // width: 100%;
  // overflow: clip;
`;
const DogMobile = styled.img`
  position: absolute;
  overflow: clip;
  left: 20px;
  top: 161px;
  width: 280px;
  // height: 564;
  display: block;
  min-width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const DogTab = styled(DogMobile)`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    // width: 636px;
  }
`;
const DogDesk = styled(DogMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    width: 524px;
    left: 130px;
  }
`;

const WaveMobile = styled.img`
  position: absolute;
  overflow: clip;
  left: 0px;
  top: 90px;
  // width: 760px;
  height: 564;
  display: block;
  min-width: 100%;

  height: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }

  // @media screen and (min-width: 1280px) {
  //   padding: 16px 20px 0px 20px;
  // }
`;

const WaveTab = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
`;

const WaveDesk = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1178px;
    top: 335px;
    left: -650px;
  }
`;
const WaveDesk2 = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 425px;
    top: 324px;
    left: 236px;
  }
`;
const Heart = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 91px;
    top: 120px;
    left: 70px;
  }
`;

export {
  Container,
  Title,
  Images,
  DogMobile,
  DogTab,
  DogDesk,
  WaveMobile,
  WaveTab,
  WaveDesk,
  WaveDesk2,
  Heart,
};
