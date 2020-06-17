import React, { useEffect } from 'react';

import profile from '../../images/profile2.jpg';

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
    <div class="about-container">
      <h2>About</h2>
      <div class="alignment">
        <img src={profile} className="faded"/>
        <div className="faded">
          <p>Previously a paralegal, I began teaching myself to code in 2018. My first development job was for an art/education supply retailer in northern Indiana where I handled both their website and internal intranet. From there, I moved into a software development role for a Managed Security Service Provider, where my tasks mainly involved the front end of the company's proprietary customer portal. I'm now employed as a software engineer at Traction Ag, a new tech startup in Auburn, Indiana, which will soon be offering accounting software designed specifically for crop growers. Stay tuend, as we are set to launch in late 2020! <a name="contact"></a></p>
        </div>
      </div>
    </div>
  )
}

export default About;
