import React from 'react';

import './Contact.scss';

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
    error: ''
  }

  updateInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  sendEmail = (e) => {
    const { name, email, message } = this.state;
    e.preventDefault();
    if (name, email, message) {
      let payload = {
        name: name,
        email: email,
        message: message
      };
      fetch('/contact', {
        method: 'POST',
        body: JSON.stringify(payload)
      })
      .then(res => {
        console.log('the result is: ', res);
        if (res.ok === true) {

        } else {
          this.setState({
            error: 'There has been an error.'
          })
        }
      })
      .catch(err => {
        console.log('there was an error', err)
      })
    } else {
      this.setState({
        error: 'Fill out each form input.'
      })
    }
  }

  render() {
    return (
      <div className="contact">
      <h2>Contact</h2>
      <div class="contact-container">

      <div>
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
        </div>
        <form onSubmit={this.sendEmail}>
            <div>
              <label>NAME</label>
              <input type="text" id="name" name="name" required onChange={this.updateInput}></input>
            </div>
            <div>
              <label>EMAIL</label>
              <input type="email" name="email" id="email" required onChange={this.updateInput}></input>
            </div>
            <div>
              <label>MESSAGE</label>
              <textarea id="message" name="message" required maxlength="700" onChange={this.updateInput}></textarea>
            </div>
            <button type="submit">SUBMIT</button>
            {this.state.error.length > 1 ?
              <p>{this.state.error}</p>
            : null}
          </form>
      </div>
      </div>
    )
  }
}

export default Contact;
