import React, { useEffect, useState } from 'react';
import postgres from '../../../dist/images/postgresql.png';
import heroku from '../../../dist/images/heroku.svg';
import udemy from '../../../dist/images/udemy.png';
import './Intro.scss';

const Intro = () => {
  const [ certifications, setCertifications ] = useState([]);
  useEffect(() => {
    fetch(`/udemy_certs`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
      setCertifications(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <div className="intro">
      <p className="faded">
        I develop mobile-first and fully responsive web applications with React, Angular, Node, and PostgreSQL. My professional experience focuses on the front end, but I have full stack experience building RESTful APIs and using serverless solutions in my own personal side projects.
      </p>
      <h2 className="faded">My favorite technologies</h2>
      <div className="tech">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt "></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-js "></i>
        <i className="fab fa-react "></i>
        <i className="fab fa-angular "></i>
        <i className="fab fa-node "></i>
        <i className="fab fa-git-square "></i>
        <img src={postgres} alt="postgreSQL" />
        <img src={heroku} alt="heroku" />
      </div>
      
      <div style={{ paddingTop: `4vw`}}>
        <h2 className="faded">Udemy Certificates</h2>
        <div className="faded certifications">
          {certifications.map((cert, index) => (     
            <a href={`/udemy_certs/${cert.link}`} target="_blank">
              <div className="udemy">
                <img src={udemy} />
                <div>
                  <p>{cert.title.substring(0, 30)}{cert.title.length > 30 ? '...' : null}</p>
                  <p className="bold">Issued: {cert.issued}</p>
                </div>
                
              </div>
            </a>
              
            
          ))}
        </div>
      </div>

    </div>
  )
}

export default Intro;
