import React from 'react';

import './Nav.scss';

class Nav extends React.Component {

  state = {
    show: false
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render () {
      return (
        <>
          <nav className={this.state.show ? null : 'hidden'}>
              <i className="fas fa-times-circle" onClick={this.toggleMenu}></i>
              <ul>
                <li ><a href="#home">HOME</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li onClick={this.toggleMenu}><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
          </nav>
          {!this.state.show ?
          <div className="nav">
            <i className="fas fa-bars" onClick={this.toggleMenu}></i>
          </div> : null}
        </>
      )
  }
}

export default Nav;
