// require('dotenv').config()
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

app.get('/udemy_certs', (req, res) => {
  let udemy_certs = [
    {
      title: "Complete React Developer Course",
      link: "UC-3SA9KV1T.pdf",
      issued: "Dec. 20, 2019"
    }, 
    {
      title: "Learn Database Design with MySQL",
      link: "UC-7UX53JNK.jpg",
      issued: "Sept. 1, 2019"
    }, 
    {
      title: "100 Algorithms Challenge",
      link: "UC-9J835G6E.pdf",
      issued: "June 4, 2019"
    }, 
    {
      title: "Advanced JavaScript Concepts",
      link: "UC-17LFFRO3.jpg",
      issued: "Oct. 4, 2019"
    },
    {
      title: "Node, SQL, & PostgreSQL - Mastering Backend Web Development", 
      link: "UC-bbb6f811-bb95-4309-8f3a-6e6fbd7ad71d.jpg",
      issued: "April 2, 2020"
    }, 
    {
      title: "Git Going Fast: One Hour of Git Crash Course",
      link: "UC-D7BODFLQ.pdf",
      issued: "June 4, 2019"
    },
    {
      title: "React - The Complete Guide",
      link: "UC-Q4O7GA4H.pdf",
      issued: "Dec. 7, 2019"
    },
    {
      title: "JavaScript 360: Complete Introduction to EcmaScript",
      link: "UC-R5BSRG94.pdf",
      issued: "April 9, 2019"
    },
    {
      title: "Angular - The Complete Guide (2020 Edition)",
      link: "UC-1a52642d-5cf0-446b-9afd-c5ce977ac91a.pdf",
      issued: "August 6, 2020"
    }
  ]
  res.send(udemy_certs);
});

app.get('/udemy_certs/:link', (request, response) => {
  const { link } = request.params
  let contentType;
  let content_type = link.split('.')[1];
  if (content_type === 'pdf') {
    contentType = "application/pdf";
  } else if (content_type === 'jpg') {
    contentType = "jpeg";
  }
  var data = fs.readFileSync(`./udemy_certs/${link}`);
  response.contentType(contentType);
  response.send(data);
})

app.post('/contact', (request, response) => {
  const { name, email, message } = request.body; 
  const options = {
    auth: {
      api_key: `${process.env.SENDGRID_API_KEY}`,
    }
  }
  const mailer = nodemailer.createTransport(sgTransport(options))
  const emailToSend = {
    from: `bailey.pownell@gmail.com`,
    to: `bailey.pownell@gmail.com`,
    subject: `Portolio Email from ${name}`,
    html: `<h2>${name}, email: ${email} has sent you a message.</h2><p>${message}<p>`
  };
  mailer.sendMail(emailToSend, function(err, res) {
    if (err) {
      return response.status(500).json({ success: false, message: 'There was an error sending the email', error: err.message, name: err.name})
    } else {
      return response.status(200).json('Email sent.');
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
