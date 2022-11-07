import * as dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import cors from 'cors'
import nodemailer from 'nodemailer'
import AWS from 'aws-sdk'
import { format } from 'date-fns'

const app = express()

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

AWS.config.update({ 
  accessKeyId: process.env.SES_ACCESS_KEY,
  secretAccessKey: process.env.SES_SECRET_KEY,
  region: process.env.AWS_REGION_ID 
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 3000

// app.get('/bailey_pownell_resume.pdf', (req, res) => {
//   const pdf = fs.readFileSync('./server/assets/bailey_pownell_resume.pdf')
//   res.contentType('application/pdf')
//   res.send(pdf)
// })

app.get('/udemy_certs', (req, res) => {
  const udemy_certs = [
    {
      title: 'Complete React Developer Course',
      link: 'UC-3SA9KV1T.pdf',
      issued: format(new Date(2019, 11, 20), 'PP'),
      date: new Date(2019, 11, 20),
    }, 
    {
      title: 'Learn Database Design with MySQL',
      link: 'UC-7UX53JNK.jpg',
      issued: format(new Date(2019, 8, 1), 'PP'),
      date: new Date(2019, 8, 1),
    }, 
    {
      title: 'Advanced JavaScript Concepts',
      link: 'UC-17LFFRO3.jpg',
      issued: format(new Date(2019, 9, 4), 'PP'),
      date: new Date(2019, 9, 4),
    },
    {
      title: 'Node, SQL, & PostgreSQL - Mastering Backend Web Development', 
      link: 'UC-bbb6f811-bb95-4309-8f3a-6e6fbd7ad71d.jpg',
      issued: format(new Date(2020, 3, 2), 'PP'),
      date: new Date(2020, 3, 2),
    }, 
    {
      title: 'React - The Complete Guide',
      link: 'UC-Q4O7GA4H.pdf',
      issued: format(new Date(2019, 11, 7), 'PP'),
      date: new Date(2019, 11, 7),
    },
    {
      title: 'JavaScript 360: Complete Introduction to EcmaScript',
      link: 'UC-R5BSRG94.pdf',
      issued: format(new Date(2019, 3, 9), 'PP'),
      date: new Date(2019, 3, 9),
    },
    {
      title: 'Angular - The Complete Guide (2020 Edition)',
      link: 'UC-1a52642d-5cf0-446b-9afd-c5ce977ac91a.pdf',
      issued: format(new Date(2020, 7, 6), 'PP'),
      date: new Date(2020, 7, 6)
    }
  ]
  res.send(udemy_certs)
})

app.get('/udemy_certs/:link', (request, response) => {
  const { link } = request.params
  let contentType: string = ''
  let content_type = link.split('.')[1]
  if (content_type === 'pdf') {
    contentType = 'application/pdf'
  } else if (content_type === 'jpg') {
    contentType = 'jpeg'
  }
  var data = fs.readFileSync(`./server/assets/${link}`)
  response.contentType(contentType)
  response.send(data)
})

app.post('/contact', (request, response) => {
  const { name, email, message } = request.body
  
  const mailer = nodemailer.createTransport({
    SES: new AWS.SES(),
  })

  const emailToSend = {
    from: `bailey.pownell@gmail.com`,
    to: `bailey.pownell@gmail.com`,
    subject: `Portolio Email from ${name}`,
    html: `<h2>${name}, email: ${email} has sent you a message.</h2><p>${message}<p>`
  }

  mailer.sendMail(emailToSend, function(err, res) {
    if (err) {
      return response.status(500).json({ 
        success: false, 
        message: 'There was an error sending the email', 
        error: err.message, 
        name: err.name
      })
    } else {
      return response.status(200).json('Email sent.')
    }
  })
})

app.listen(port, () => {
  console.log(`Project up on ${port}`)
})

export default app
