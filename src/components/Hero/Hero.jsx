import React from 'react';
import {
  Container,
  Title,
  Images,
  DogMobile,
  WaveMobile,
  WaveTab,
  WaveDesk,
  WaveDesk2,
  Heart,
} from './Hero.styled';
import labrador from '../../images/labradorDesk.png';

import wave from '../../images/wave.png';
import waveTab from '../../images/waveTab.png';
import waveDesk from '../../images/wave1-desk.png';
import waveDesk2 from '../../images/wave2-desk.png';
import heart from '../../images/heart.png';

export const Hero = () => {
  return (
    <Container>
      <Title>Take good care of your small pets</Title>

      <Images>
        <DogMobile src={labrador} alt="Dog"></DogMobile>
        <WaveMobile src={wave} alt="Wave"></WaveMobile>
        <WaveTab src={waveTab} alt="Wave"></WaveTab>
      </Images>
      <Heart src={heart} alt="Wave"></Heart>
      <WaveDesk2 src={waveDesk2} alt="Wave"></WaveDesk2>
      <WaveDesk src={waveDesk} alt="Wave"></WaveDesk>
    </Container>
  );
};
