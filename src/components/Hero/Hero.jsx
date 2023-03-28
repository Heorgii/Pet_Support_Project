import React from 'react';
import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeartContainer,
  BallContainer,
} from './Hero.styled';
export const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <HeartContainer />
        <BallContainer />
      </HeroContainer>
    </HeroSection>
  );
};
