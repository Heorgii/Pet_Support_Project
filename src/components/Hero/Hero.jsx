import React from 'react';
import {
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
} from './Hero.styled';

import labrador from 'images/hero/dogMobile-X1.png';
import labradorTab from 'images/hero/dogTab-X1.png';
import labradorDesk from 'images/hero/dogDesk-X1.png';

import wave from 'images/hero/wave.png';
import waveTab from 'images/hero/waveTab.png';
import waveDesk from 'images/hero/wave1-desk.png';
import waveDesk2 from 'images/hero/wave2-desk.png';
import heart from 'images/hero/heart.png';

export const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Take good care of your small pets</HeroTitle>

      <DogMobile src={labrador} alt="Dog" width="280"></DogMobile>
      <DogTab src={labradorTab} alt="Dog" width="636"></DogTab>
      <DogDesk src={labradorDesk} alt="Dog" width="524"></DogDesk>

      <WaveMobile src={wave} alt="Wave" width="768"></WaveMobile>
      <WaveTab src={waveTab} alt="Wave" width="1280"></WaveTab>

      <Heart src={heart} alt="Wave"></Heart>
      <WaveDesk2 src={waveDesk2} alt="Wave"></WaveDesk2>
      <WaveDesk src={waveDesk} alt="Wave"></WaveDesk>
    </HeroSection>
  );
};
