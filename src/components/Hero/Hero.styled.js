import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
const Container = styled.div`
position: relative;  
// outline: 2px solid red;  
    display: flex;
  flex-direction: column;
  justifycontent: space-between;
  width: 100vw:
  height: 100vh;

  @media screen and (min-width: 1280px) {
    position: relative;
    flex-direction: row;
    height: 100vh;
    max-width: 1280px;
  }
`;

const Title = styled.h1`
  // outline: 2px solid green;
  padding: 0px 20px;
  margin-top: 60px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-aling: center;

  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 92px;
    width: 630px;
  }
`;
const Images = styled.div`
  // outline: 1px solid black;
  // position: relative;
  display: flex;
  margin-top: 29px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    // margin-top: 92px;
    // align-items: end;
  }
`;
const DogMobile = styled.img`
  position: relative;
  display: block;
  margin: 0 0 0 10vw;
  width: 90vw;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    // display: none;
    max-width: 90vw;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 750px;
    top: 124px;
    width: 524px;
    margin: 0px;
  }
`;

const WaveMobile = styled.img`
  position: absolute;
  z-index: -10;
  left: 0px;
  bottom: 0px;
  display: block;
  min-width: 100vw;

  height: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const WaveTab = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
  }
`;

const WaveDesk = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    min-width: 1000px;
    position: absolute;
    z-index: -10;
    top: 323px;
    left: 0px;
  }
`;
const WaveDesk2 = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    min-width: 380px;
    position: absolute;
    z-index: -10;
    top: 335px;
    left: 900px;
  }
`;
const Heart = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 1280px) {
    position: absolute;
    display: flex;
    width: 10px;
    top: 50px;
    left: 700px;
    min-width: 91px;
  }
`;

export {
  Container,
  Title,
  Images,
  DogMobile,
  WaveMobile,
  WaveTab,
  WaveDesk,
  WaveDesk2,
  Heart,
};
