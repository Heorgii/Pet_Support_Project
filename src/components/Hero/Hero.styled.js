import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';

const HeroSection = styled(Container)`
  height: 100vh;
  position: relative;
  justify-content: start;
  @media screen and (min-width: 1280px) {
    align-items: start;
  }
`;

const HeroTitle = styled.h1`
  // display: block;
  // outline: 2px solid green;
  margin-top: 60px;
  text-align: left;

  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 92px;
    max-width: 630px;
  }
`;

const DogMobile = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const WaveMobile = styled.img`
  position: absolute;
  z-index: -10;
  left: 0px;
  top: 100px;
  height: 88.1vh;
  object-fit: fill;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DogTab = styled(DogMobile)`
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    display: block;
  }
`;
const WaveTab = styled(WaveMobile)`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    display: block;
    height: 91.5%;
  }
`;

const DogDesk = styled.img`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 750px;
    bottom: 0;
  }
`;

const WaveDesk = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    min-width: 1000px;
    position: absolute;
    z-index: -10;
    bottom: 0;
    left: 0;
  }
`;
const WaveDesk2 = styled.img`
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
const Heart = styled.img`
  display: none;
  @media screen and (min-width: 1280px) {
    position: absolute;
    display: flex;
    width: 10px;

    left: 670px;
    bottom: 500px;
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
