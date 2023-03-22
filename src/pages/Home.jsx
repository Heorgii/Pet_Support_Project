import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Hero } from '../components/Hero/Hero';
// import { Container } from 'components/baseStyles/CommonStyle.styled';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Hero />
    </>
  );
};

export default HomePage;
