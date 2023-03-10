import { CircularProgress, Snackbar, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { animated, Spring } from 'react-spring/';
import VisibilitySensor from 'react-visibility-sensor';
import * as yup from 'yup';
import Footer from '../Footer/Footer';
import './Contact.scss';
import ContactButtons from './ContactButtons/ContactButtons';

const validationSchema = yup.object({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  message: yup.string().required('Message is required.'),
});

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showSuccessSnackBar, setShowSuccessSnackBar] = useState(false);
  const [showErrorSnackBar, setShowErrorSnackBar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sendEmail = async (form: {
    name: string;
    email: string;
    message: string;
  }) => {
    const { name, email, message } = form;
    setSending(true);
    let payload = { name, email, message };

    try {
      const emailResponse = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSending(false);
      setShowSuccessSnackBar(emailResponse.ok);
      setShowErrorSnackBar(!emailResponse.ok);

      if (!emailResponse.ok) {
        console.log(`There was an error: ${emailResponse.status}`);
      }
    } catch (error) {
      setSending(false);
      setShowErrorSnackBar(true);
      console.log(error);
    }
  };

  const handleClose = () => setShowSuccessSnackBar(false);

  const onChange = (isVisible: boolean) => setIsVisible(isVisible);

  return (
    <div className="contact">
      <div className="contact-container">
        <VisibilitySensor onChange={onChange}>
          <Spring
            from={{
              opacity: isVisible ? 0 : 1,
              transform: isVisible ? 'scale(0.9)' : 'scale(1)',
            }}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            }}
            config={{ duration: 750 }}
          >
            {(styles: any) => (
              <animated.div style={styles}>
                <p>Don't be a stranger.</p>
                <h1 id="hi">Say hi!</h1>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    message: '',
                  }}
                  validationSchema={validationSchema}
                  validateOnMount
                  onSubmit={(values) => sendEmail(values)}
                  render={(formik) => (
                    <Form>
                      <div className="inputs">
                        <TextField
                          variant="standard"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          label="Name"
                          value={formik.values.name}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.name && Boolean(formik.errors.name)
                          }
                          helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                          variant="standard"
                          name="email"
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          id="email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          label="Email"
                        />
                        <TextField
                          variant="standard"
                          id="message"
                          name="message"
                          multiline
                          rows={6}
                          placeholder="Message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                          }
                          helperText={
                            formik.touched.message && formik.errors.message
                          }
                          label="Message"
                        />
                      </div>
                      <div id="button">
                        <button
                          type="submit"
                          color="primary"
                          disabled={
                            !(
                              formik.values.message &&
                              formik.values.email &&
                              formik.values.name
                            )
                          }
                        >
                          {sending ? <CircularProgress /> : 'Send'}
                        </button>
                      </div>
                    </Form>
                  )}
                />
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
          open={showSuccessSnackBar}
          autoHideDuration={4000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              Email sent! <i className="fas fa-check-square"></i>
            </span>
          }
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={showErrorSnackBar}
          autoHideDuration={4000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              There was an error. <i className="fas fa-times"></i>
            </span>
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
