import React from 'react'
import LandingImage from '../LandingImage/LandingImage'
import Intro from '../Intro/Intro'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <LandingImage />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;
