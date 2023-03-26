import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import waveMobile from 'images/hero/waveMobileFull.png';
import DogFull from 'images/hero/dogFull-X1.png';
import waveTabFull from 'images/hero/waveTabFull.png';
import waveLeftDesk from 'images/hero/wave1-desk.png';
import waveRightDesk from 'images/hero/wave2Full.png';
import heart from 'images/hero/heart.png';

const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  justify-content: start;
  align-items: start;

  @media screen and (max-width: 767.9px) {
    background-image: url(${DogFull}), url(${waveMobile});
    background-repeat: no-repeat;

    background-size: 330px 564px, 620px 540px;
    background-position: top 180px left 30%, top 80px left 25%;
  }
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    background-image: url(${DogFull}), url(${waveTabFull});
    background-repeat: no-repeat;
    background-size: 636px 1142px, 1300px 1150px;
    background-position: top 450px left 50%, top 140px left 30%;
  }
`;

const HeroContainer = styled(Container)`
  height: 100vh;
  justify-content: start;
  align-items: start;
  @media screen and (min-width: 1280px) {
    background-image: url(${DogFull}), url(${waveRightDesk}),
      url(${waveLeftDesk}), url(${heart});
    background-repeat: no-repeat;
    background-size: 524px 918px, 425px 393px, 1178px 450px, 91px 89px;
    background-position: top 150px left 92%, top 375px right 0px,
      top 318px left 0px, top 80px left 650px;
  }
`;

const HeroTitle = styled.h1`
  // display: flex;
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
export { HeroSection, HeroContainer, HeroTitle };
