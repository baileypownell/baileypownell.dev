import React from 'react'
import github from '../../../dist/images/githublogo.png'
import treehouse from '../../../dist/images/Treehouse-Logo.png'
import linkedin from '../../../dist/images/linkedin.png'
import codepen from '../../../dist/images/codepen.png'
import resume from '../../../dist/images/resume.png'
import TextField from '@material-ui/core/TextField'
import { toaster } from 'evergreen-ui'
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
    e.preventDefault()
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
        if (res.ok) {
          this.setState({
            sending: false
          })
          toaster.success(
            'Email sent.'
          )
        } else {
          this.setState({
            sending: false
          })
          toaster.danger(
            'There was an error. Email could not be sent.'
          )
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({
          sending: false
        })
      })
    } 
  }

  render() {
  
    return (
      <div className="contact">
      <h2>Contact</h2>
      <div className="contact-container">

      <div className="faded">
          <div className="contact-links">
            <a href="https://github.com/baileypownell" target="_blank"><img className="logo" src={github} alt="Github logo"/></a>
            <a href="https://teamtreehouse.com/baileypownell" target="_blank"><img className="logo" src={treehouse} alt="Treehouse logo"/></a>
            <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><img className="logo" src={linkedin} alt="LinkedIn logo"/></a>
            <a href="https://codepen.io/baileypownell/" target="_blank"><img className="logo" src={codepen} alt="Codepen logo"/></a>
            <a href="bpownell_resume.pdf" target="_blank"><img className="logo" src={resume} alt="resume"/></a>
          </div>
        </div>
        {/* <form className="faded" onSubmit={this.sendEmail}>
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
              <textarea id="message" name="message" required maxLength="700" onChange={this.updateInput}></textarea>
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
          </form> */}
          <form className="faded" onSubmit={this.sendEmail} noValidate autoComplete="off">
            <div className="inputs">
              <TextField id="standard-basic" id="name" name="name" required onChange={this.updateInput} label="Name" />
              <TextField id="standard-basic" name="email" id="email" required onChange={this.updateInput} label="Email" />
              <TextField id="standard-basic" id="message" name="message" required maxLength="700" onChange={this.updateInput} label="Message" />
            </div>
            
            <button type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
