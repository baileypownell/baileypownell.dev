import React from 'react'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import './Contact.scss'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sending: false,
    showSuccessSnackBar: false,
    showErrorSnackBar: false,
    invalidEmail: false,
    emailErrorText: ''
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
    this.setState({
      sending: true
    })
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
    const {message, email, name, invalidEmail} = this.state
    return (
      <div className="contact">
        <div className="contact-container">
          <p>Don't be a stranger.</p>
          <h1 id="hi">Say Hi</h1>
          <div>
            </div>
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
                  <Button 
                    boxShadow={3} 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    disabled={!(message && email && name && !invalidEmail)}>
                    {this.state.sending ? <CircularProgress /> : 'Send' }
                  </Button>
                </div>
              </form>

              <div className="contact-links">
                <a href="https://github.com/baileypownell" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bailey-pownell-224606167/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="bpownell_resume2.pdf" target="_blank"><i class="fas fa-file"></i></a>
              </div>


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
