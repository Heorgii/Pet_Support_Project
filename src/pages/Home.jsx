import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { Title } from './Home.styled';
import labrador from '../../src/images/labrador.png';
import wave from '../../src/images/Vector1.png';
const HomePage = () => {
  return (
    <Container
      style={{
        position: 'relative',
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Title>Take good care of your small pets</Title>
      </div>
      {/* <div
        style={{
          backgroundImage: `url(${wave})`,
          width: 620,
          height: 470,

          // backgroundSize: 700,
          // minWidth: 390,

          // minHeight: 500,
          position: 'absolute',
          // top: 0,
          left: -100,

          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

          // width: 280,
          // height: 564,
        }}
      ></div> */}
      <div>
        <div
          style={{
            // backgroundColor: 'red',
            // position: 'absolute',
            // marginTop: 140,
            // marginLeft: 20,
            overflow: 'hidden',
            backgroundImage: `url(${wave})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 380,
            height: 500,
          }}
        ></div>
        <div
          style={{
            // backgroundColor: 'red',
            position: 'absolute',
            // marginTop: 140,
            // marginLeft: 20,
            overflow: 'hidden',
            backgroundImage: `url(${labrador})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 380,
            height: 500,
          }}
        ></div>
      </div>
    </Container>
  );
};

export default HomePage;
