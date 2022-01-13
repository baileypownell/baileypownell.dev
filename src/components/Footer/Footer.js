import React, { useEffect } from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
        <p className="source">See the source code for this site <i class="fas fa-code"></i></p>
      </a>
    </footer>
  )
}

export default Footer;
