const path = require('path');
const express = require('express');
var bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const app = express();

// middleware so we can access request.body
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/bpownell_resume.pdf', (req, res) => {
  var data =fs.readFileSync('./bpownell_resume.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

app.post('/contact', (request, response) => {
  const { name, email, message } = request.body;
  return response.json({success: true})
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.listen(port, () => {
  console.log('project up on port', port)
})

module.exports = app;
