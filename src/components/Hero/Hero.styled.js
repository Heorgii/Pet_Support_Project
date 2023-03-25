import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';

const HeroSection = styled(Container)``;

const HeroTitle = styled.h1`
  outline: 2px solid green;
  margin-top: 60px;
  align-item: start;

  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;

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

const DogMobile = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const DogTab = styled(DogMobile)`
  // display: none;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    width: 100%;
    max-width: 636px;
  }
`;
const DogDesk = styled(DogMobile)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 750px;
    bottom: 0;
    max-width: 524px;
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
    bottom: 0;
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
    bottom: 0;
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
  HeroSection,
  HeroTitle,
  DogMobile,
  DogTab,
  DogDesk,
  WaveMobile,
  WaveTab,
  WaveDesk,
  WaveDesk2,
  Heart,
};
