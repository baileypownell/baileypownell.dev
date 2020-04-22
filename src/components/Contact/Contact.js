import React from 'react';

import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div class="contact-container">
      <h2>Contact</h2>
      <div id="call">
        <h3 class="moved-left">Hiring?</h3>
        <h3>Let's get in touch.</h3>
      </div>
        <div class="contact-links">

          <a href="https://github.com/baileypownell" target="_blank"><img class="logo" src="images/githublogo.png" alt="Github logo"/></a>
          <a href="https://teamtreehouse.com/baileypownell" target="_blank"><img class="logo" src="images/Treehouse-Logo.png" alt="Treehouse logo"/></a>
          <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><img class="logo" src="images/linkedin.png" alt="LinkedIn logo"/></a>
          <a href="https://codepen.io/baileypownell/" target="_blank"><img class="logo" src="images/codepen.png" alt="Codepen logo"/></a>
          <a href="bpownell_resume.pdf" target="_blank"><img class="logo" src="images/resume.png" alt="resume"/></a>
        </div>
        <div id="information">
          <form method="POST">
            <div>
              <label>NAME</label>
              <input type="text" id="name" name="name" required></input>
            </div>
            <div>
              <label>EMAIL</label>
              <input type="email" name="email" required></input>
            </div>
            <div>
              <label>MESSAGE</label>
              <textarea id="message" name="message" required maxlength="500"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
          <div class="confirmation"><h4>Thanks! Your email has been sent.</h4></div>
          <div class="error"><h4>Sorry, we've run into a problem sending your email. :/ </h4></div>
        </div>
      </div>
    )
  }
}

export default Contact;
