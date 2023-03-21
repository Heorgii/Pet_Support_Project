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
} from './Hero.styled';
import labrador from '../../images/labrador.png';
import labradorTab from '../../images/labrador-tab.png';
import labradorDesk from '../../images/labradorDesk.png';

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
