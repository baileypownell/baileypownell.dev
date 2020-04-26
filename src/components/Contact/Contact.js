import React from 'react';

import github from '../../images/githublogo.png';
import treehouse from '../../images/Treehouse-Logo.png';
import linkedin from '../../images/linkedin.png';
import codepen from '../../images/codepen.png';
import resume from '../../images/resume.png';


import './Contact.scss';

class Contact extends React.Component {

  fadeInElements = () => {
    let fadedElements = document.querySelectorAll('.faded');
    for (let i = 0; i < fadedElements.length; i++) {
      let introPos = fadedElements[i].getBoundingClientRect().top;
      let screenPos = window.innerHeight/1.2;
      if (introPos < screenPos ) {
        fadedElements[i].classList.add('fade-in');
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.fadeInElements)
  }

  state = {
    name: '',
    email: '',
    message: '',
    error: '',
    submissionMessage: '',
    sending: false
  }

  updateInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  sendEmail = (e) => {
    const { name, email, message } = this.state;
    this.setState({
      sending: true
    })
    e.preventDefault();
    if (name, email, message) {
      let payload = {
        name: name,
        email: email,
        message: message
      };
      fetch('/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(res => {
        console.log('the result is: ', res);
        if (res.ok === true) {
          this.setState({
            submissionMessage: 'Your email has been sent successfully.'
          });
          this.setState({
            sending: false
          })
        } else {
          this.setState({
            error: 'There has been an error.',
            sending: false
          })
        }
      })
      .catch(err => {
        console.log('there was an error', err);
        this.setState({
          sending: false
        })
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

      <div className="faded">
        <div id="call">
          <h3 class="moved-left">Hiring?</h3>
          <h3>Let's get in touch.</h3>
        </div>
          <div class="contact-links">
            <a href="https://github.com/baileypownell" target="_blank"><img class="logo" src={github} alt="Github logo"/></a>
            <a href="https://teamtreehouse.com/baileypownell" target="_blank"><img class="logo" src={treehouse} alt="Treehouse logo"/></a>
            <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><img class="logo" src={linkedin} alt="LinkedIn logo"/></a>
            <a href="https://codepen.io/baileypownell/" target="_blank"><img class="logo" src={codepen} alt="Codepen logo"/></a>
            <a href="bpownell_resume.pdf" target="_blank"><img class="logo" src={resume} alt="resume"/></a>
          </div>
        </div>
        <form className="faded" onSubmit={this.sendEmail}>
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
            <button type="submit">
              SUBMIT
            </button>
            {this.state.error.length > 1 ?
              <p>{this.state.error}</p>
            : null}
            {this.state.submissionMessage.length > 1 ?
            <p>{this.state.submissionMessage}</p>
            : null}
          </form>
      </div>
      </div>
    )
  }
}

export default Contact;
