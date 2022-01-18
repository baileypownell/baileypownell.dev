import React from 'react'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import { animated, Spring } from 'react-spring/'
import VisibilitySensor from 'react-visibility-sensor'
import './Contact.scss'
import CircularProgress from '@material-ui/core/CircularProgress'
import Footer from '../Footer/Footer'
import ContactButtons from './ContactButtons/ContactButtons'


class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sending: false,
    showSuccessSnackBar: false,
    showErrorSnackBar: false,
    invalidEmail: false,
    emailErrorText: '',
    isVisible: false
  }

  updateInput = (e) => {
    
    if (e.target.id === 'email') {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(e.target.value)) {
        this.setState({
          invalidEmail: false, 
          emailErrorText: ''
        })
      } else {
        this.setState({
          invalidEmail: true, 
          emailErrorText: 'Invalid email.'
        })
      }
    }
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  sendEmail = (e) => {
    const { name, email, message, invalidEmail } = this.state;
    this.setState({ sending: true })
    e.preventDefault()
    if (name && email && message && !invalidEmail) {
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
        this.setState({
          sending: false,
          showSuccessSnackBar: res.ok, 
          showErrorSnackBar: !res.ok,
          name: '', 
          message: '', 
          email: ''
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({ sending: false })
      })
    } 
  }

  handleClose = (snackBarType) => {
    if (snackBarType === 'success') {
      this.setState({
        showSuccessSnackBar: false
      })
    } else if (snackBarType === 'error') {
      this.setState({
        showErrorSnackBar: false
      })
    }
  }

  onChange = (isVisible) => {
    this.setState({ isVisible })
  }

  render() {
    const {message, email, name, invalidEmail, isVisible} = this.state

    return (
      <div className="contact">
        <div className="contact-container">
          <VisibilitySensor onChange={this.onChange}>
            <Spring opacity={isVisible ? 1 : 0} transform={isVisible ? 'scale(1)' : 'scale(0.9)'} config={{ duration: 750, delay: 500 }}>
              {styles => (
                <animated.div style={styles}>
                  <p>Don't be a stranger.</p>
                  <h1 id="hi">Say Hi</h1>
                  <form onSubmit={this.sendEmail} noValidate autoComplete="off">
                    <div className="inputs">
                      <TextField 
                        id="standard-basic" 
                        id="name" 
                        name="name" 
                        onChange={this.updateInput} 
                        value={name}
                        label="Name" />
                      <TextField 
                        id="standard-basic" 
                        name="email" 
                        error={this.state.invalidEmail} 
                        helperText={this.state.emailErrorText} 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={this.updateInput} 
                        label="Email" />
                      <TextField 
                        id="standard-basic" 
                        id="message" 
                        name="message" 
                        maxLength="500" 
                        multiline
                        rows={6}
                        placeholder="Message"
                        value={message}
                        onChange={this.updateInput} 
                        label="Message" />
                    </div>
                    
                    <div id="button">
                      <button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        disabled={!(message && email && name && !invalidEmail)}>
                        {this.state.sending ? <CircularProgress /> : 'Send' }
                      </button>
                    </div>
                  </form>
                </animated.div> 
                )}
            </Spring>
          </VisibilitySensor>

          <ContactButtons />

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.showSuccessSnackBar}
            autoHideDuration={4000}
            onClose={() => this.handleClose('success')}
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
            autoHideDuration={4000}
            onClose={() => this.handleClose('error')}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">There was an error. <i className="fas fa-times"></i></span>}
          />
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Contact
