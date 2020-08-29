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
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}>
          <div id="second-line">
            <div className="footer-container">

              <i className="fas fa-code" id="computer"></i>
              <div>
                <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
                <p className="source">See the source code for this site</p></a>
              </div>
              {/* <div>
                <i className="fas fa-phone"></i>
                <p>574.727.5898</p>
              </div> */}
              <div>
                <i className="fas fa-envelope"></i>
                <p>bailey.pownell@gmail.com</p>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><i className="fab fa-linkedin"></i>
                <p>LinkedIn</p></a>
              </div>
              <div>
                <a href="https://github.com/baileypownell" target="_blank"><i className="fab fa-github"></i>
                <p>Github</p></a>
              </div>
            <p className="copyright">&copy; 2020 Bailey Pownell</p>
            </div>
          </div>
        </div>
      </footer>
    )



}

export default Footer;
