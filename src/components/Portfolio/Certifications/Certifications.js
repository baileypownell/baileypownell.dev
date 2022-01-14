import React, { useEffect, useState } from 'react'
import udemy from '../../../../dist/images/udemy.png'
import './Certifications.scss'

const Certifications = () => {
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
    <div className="certification-container">
      <p class="udemy-title">Udemy Certificates</p>
      <div className="certifications">
        {certifications.map(cert => (     
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
  )
}

export default Certifications
