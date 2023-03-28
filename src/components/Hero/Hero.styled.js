import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import waveMobile from 'images/hero/waveMobileFull.png';
import DogMobile from 'images/hero/dogMobile-X1.png';
import DogTab from 'images/hero/dogTab-X1.png';
import DogDesk from 'images/hero/dogDesk-X1.png';
import waveTabFull from 'images/hero/waveTabFull.png';
import waveLeftDesk from 'images/hero/wave1-desk.png';
import waveRightDesk from 'images/hero/wave2Full.png';
import heart from 'images/hero/heart.png';

const HeroSection = styled.section`
  height: 100%;
  min-height: 720px;

  @media screen and (max-width: 767.9px) {
    min-height: 550px;
    background: url(${DogMobile}), url(${waveMobile});
    background-repeat: no-repeat;
    background-size: 280px auto, 620px auto;
    background-position: bottom 0px left 50%, bottom -20px left 25%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    min-height: 1200px;
    background: url(${DogTab}), url(${waveTabFull});
    background-repeat: no-repeat;
    background-size: 636px auto, 1400px auto;
    background-position: bottom 0px left 50%, bottom -150px left 30%;
  }
`;

const HeroContainer = styled(Container)`
  height: 100%;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 1280px) {
    /* height: calc(100vh - 64px); */
    background-image: url(${DogDesk}), url(${waveRightDesk}),
      url(${waveLeftDesk}), url(${heart});
    background-repeat: no-repeat;
    background-size: 524px auto, 425px 393px, 1178px 450px, 91px 89px;
    background-position: bottom 0px left 92%, bottom 0px right 0px,
      bottom 0px left 0px, top 80px left 650px;
  }
`;

const HeroTitle = styled.h1`
  margin-top: 60px;
  text-align: left;
  /* margin-right: auto; */

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
export { HeroSection, HeroContainer, HeroTitle };
