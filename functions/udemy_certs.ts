import { format } from 'date-fns';

const handler = async (event, context) => {
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
  return {
    statusCode: 200,
    body: JSON.stringify({ certificates: udemy_certs })
  }
}

export { handler };