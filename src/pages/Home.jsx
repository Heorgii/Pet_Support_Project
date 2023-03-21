import { Helmet } from 'react-helmet-async';
import React from 'react';
// import { Container } from 'components/baseStyles/CommonStyle.styled';
import {
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
} from './Home.styled';
import labrador from '../../src/images/labrador.png';
import labradorTab from '../../src/images/labrador-tab.png';
import labradorDesk from '../../src/images/labradorDesk.png';

import wave from '../../src/images/wave.png';
import waveTab from '../../src/images/waveTab.png';
import waveDesk from '../../src/images/wave1-desk.png';
import waveDesk2 from '../../src/images/wave2-desk.png';
import heart from '../../src/images/heart.png';

const HomePage = () => {
  return (
    <Container>
      <div style={{ width: 620 }}>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Title>Take good care of your small pets</Title>
      </div>

      <Images>
        <WaveMobile src={wave} alt="Wave"></WaveMobile>
        <WaveTab src={waveTab} alt="Wave"></WaveTab>
        <WaveDesk src={waveDesk} alt="Wave"></WaveDesk>
        <WaveDesk2 src={waveDesk2} alt="Wave"></WaveDesk2>
        <Heart src={heart} alt="Wave"></Heart>
        <DogMobile src={labrador} alt="Dog"></DogMobile>
        <DogTab src={labradorTab} alt="Dog"></DogTab>
        <DogDesk src={labradorDesk} alt="Dog"></DogDesk>
      </Images>
    </Container>
  );
};

export default HomePage;
