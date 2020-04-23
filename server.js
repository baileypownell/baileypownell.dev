const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const app = express();

// middleware so we can access request.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;
// serve static assets (javascript) from the dist folder in project root
app.use(express.static(path.join(__dirname + '/dist')));

app.get('/bpownell_resume.pdf', (req, res) => {
  var data = fs.readFileSync('./bpownell_resume.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

app.post('/contact', (request, response) => {
  const { name, email, message } = request.body;

  const transporter = nodemailer.createTransport(sgTransport({
      service: 'SendGrid',
      auth: {
      api_user: `${process.env.SENDGRID_USERNAME}`,
      api_key: `${process.env.SENDGRID_PASSWORD}`
  }}));
  const mailOptions = {
    from: `${email}`,
    to: `bailey.pownell@gmail.com`,
    subject: `Portolio Email from ${name}`,
    html: `${message}`
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      return response.status(500).json({ success: false, message: 'there was an error sending the email', error: err.message, name: err.name})
    } else {
      return response.status(200).json('email sent');
    }
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('project up on port', port)
})

module.exports = app;
