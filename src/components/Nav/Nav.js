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
          {/* <nav className={this.state.show ? null : 'hidden'}>
              <i className="fas fa-times-circle" onClick={this.toggleMenu}></i>
              <ul>
                <li onClick={this.toggleMenu}>HOME</li>
                <li onClick={this.toggleMenu}>PORTFOLIO</li>
                <li onClick={this.toggleMenu}>ABOUT</li>
                <li onClick={this.toggleMenu}>CONTACT</li>
              </ul>
          </nav>
          {!this.state.show ?
          <div className="nav">
            <i className="fas fa-bars" onClick={this.toggleMenu}></i>
          </div> : null} */}
        </>
      )
  }
}

export default Nav;
