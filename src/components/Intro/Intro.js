import React, { useEffect, useState } from 'react';
import postgres from '../../images/postgresql.png';
import heroku from '../../images/heroku.svg';
import udemy from '../../images/udemy.png';
import './Intro.scss';

const Intro = () => {
  const [ certifications, setCertifications ] = useState([]);
  useEffect(() => {
    fetch(`/udemy_certs`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
      //certifications = data;
      setCertifications(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <div className="intro">
      <p className="faded">
        I develop mobile-first and fully responsive websites and web applications. My passion is giving the user a stress-free and fun experience, and I use fundamental SEO standards, ES6+ JavaScript, and the latest and most supporte CSS capabilities to get there. My go-to stack: PERN (PostgreSQL, Express, React, & Node).
      </p>
      <h2 className="faded">My favorite technologies</h2>
      <i className="fab fa-html5"></i>
      <i className="fab fa-css3-alt "></i>
      <i className="fab fa-js "></i>
      <i className="fab fa-react "></i>
      <i className="fab fa-node "></i>
      <i className="fab fa-git-square "></i>
      <img src={postgres} alt="postgreSQL" />
      <img src={heroku} alt="heroku" />
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
