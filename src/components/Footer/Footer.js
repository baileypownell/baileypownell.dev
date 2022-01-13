import React, { useEffect } from 'react';

import './Footer.scss';

const Footer = () => {

  useEffect(() => {
    const fadeFooter = () => {
      const footer = document.querySelector('footer>div');
      let scrolled = window.pageYOffset;
      if (footer) {
        footer.style.backgroundColor = 'rgba(0, 0, 0, ' + (document.body.offsetHeight-(window.innerHeight+window.pageYOffset))/500 + ')';
      }
    }
    window.addEventListener('scroll', fadeFooter);
  })

  return (
    <footer id="footer">
          <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
            <p className="source">See the source code for this site <i class="fas fa-arrow-circle-right"></i></p>
          </a>
    </footer>
  )



}

export default Footer;
