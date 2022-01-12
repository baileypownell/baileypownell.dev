import React, { useEffect } from 'react';

import './Navigation.scss';

const Navigation = () => {

  return (
    <nav>
      <a href="/home">Home</a>
      <div>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navigation;
