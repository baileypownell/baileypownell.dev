import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
      <footer id="footer">
        <div>
          <div id="second-line">
            <div class="footer-container">

              <i class="fas fa-code" id="computer"></i>
              <div>
                <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
                <p className="source">See the source code for this site</p></a>
              </div>
              <div>
                <i class="fas fa-phone"></i>
                <p>574.727.5898</p>
              </div>
              <div>
                <i class="fas fa-envelope"></i>
                <p>bailey.pownell@gmail.com</p>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><i class="fab fa-linkedin"></i>
                <p>LinkedIn</p></a>
              </div>
              <div>
                <a href="https://github.com/baileypownell" target="_blank"><i class="fab fa-github"></i>
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
