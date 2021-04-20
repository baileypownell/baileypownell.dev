import React from 'react'
import github from '../../../dist/images/githublogo.png'
import treehouse from '../../../dist/images/Treehouse-Logo.png'
import linkedin from '../../../dist/images/linkedin.png'
import codepen from '../../../dist/images/codepen.png'
import resume from '../../../dist/images/resume.png'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import './Contact.scss'
import Button from '@material-ui/core/Button'


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
    sending: false,
    showSuccessSnackBar: false,
    showErrorSnackBar: false
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
            sending: false,
            showSuccessSnackBar: true
          })
        } else {
          this.setState({
            sending: false,
            showErrorSnackBar: true
          })
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

  handleClose = () => {
    this.setState({
      showSuccessSnackBar: false
    })
  }

  render() {
    const {message, email, name} = this.state
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
          <form className="faded" onSubmit={this.sendEmail} noValidate autoComplete="off">
            <div className="inputs">
              <TextField id="standard-basic" id="name" name="name" onChange={this.updateInput} label="Name" />
              <TextField id="standard-basic" name="email" id="email" onChange={this.updateInput} label="Email" />
              <TextField id="standard-basic" id="message" name="message" maxLength="700" onChange={this.updateInput} label="Message" />
            </div>
            
            <div id="button">
              <Button boxShadow={3} type="submit" variant="contained" color="primary" disabled={!(message && email && name)}>
                Send
              </Button>
            </div>
          </form>


          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.showSuccessSnackBar}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Email sent! <i className="fas fa-check-square"></i></span>}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.showErrorSnackBar}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">There was an error. <i className="fas fa-times"></i></span>}
          />
        </div>
      </div>
    )
  }
}

export default Contact;
