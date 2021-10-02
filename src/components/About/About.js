import React, { useEffect } from 'react';

import profile from '../../../dist/images/20210716_142444.jpg';

import './About.scss';

const About = () => {

  useEffect(() => {
    const fadeInElements = () => {
      let fadedElements = document.querySelectorAll('.faded');
      for (let i = 0; i < fadedElements.length; i++) {
        let introPos = fadedElements[i].getBoundingClientRect().top;
        let screenPos = window.innerHeight/1.2;
        if (introPos < screenPos ) {
          fadedElements[i].classList.add('fade-in');
        }
      }
    }
      window.addEventListener('scroll', fadeInElements)
  })
  return (
    <div className="about-container">
      <h2>About</h2>
      <div className="alignment">
        <img src={profile} className="faded"/>
        <div className="faded">
          <p>Previously a paralegal, I began teaching myself to code in 2018. 
            My first development job was for an art/education supply retailer in northern Indiana where I handled their website and internal intranet. 
            From there I moved into a software development role for a Managed Security Service Provider, where my tasks mainly involved the 
            front end of the company's proprietary customer portal. 
            I'm now employed as a software engineer at <a href="https://www.tractionag.com/" target="_blank">Traction Ag</a>, a tech startup in Auburn, Indiana, which 
            offers accounting, agronomy, and operations software designed specifically for crop growers. 
            <a name="contact"></a></p>
        </div>
      </div>
    </div>
  )
}

export default About;
