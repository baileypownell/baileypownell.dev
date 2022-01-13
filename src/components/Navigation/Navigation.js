import React, { useEffect } from 'react';

import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <NavLink exact activeClassName="active" to='/'>Home</NavLink>
      <div>
        <NavLink activeClassName="active" to='/portfolio'>Portfolio</NavLink>
        <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
