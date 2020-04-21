import React from 'react';
import Nav from '../Nav/Nav';
import LandingImage from '../LandingImage/LandingImage';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
  return (
    <>
      <Nav />
      <LandingImage />
      <Intro />
      <Portfolio />
    </>
  )
}

export default Home;
