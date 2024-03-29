import { useEffect, useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring/';
import VisibilitySensor from 'react-visibility-sensor';
import udemy from '../../../images/udemy.png';
import './Certifications.scss';
import { compareAsc } from 'date-fns';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    duration: 200,
    delay: 50,
  });

  const onChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  useEffect(() => {
    const getCertifications = async () => {
      try {
        const udemy_certs = await fetch(`/.netlify/functions/udemy_certs`);
        if (udemy_certs.ok) {
          const data = await udemy_certs.json();
          const certificates = data.certificates;
          certificates.sort((cert1: any, cert2: any) =>
            compareAsc(new Date(cert1.date), new Date(cert2.date)),
          );
          setCertifications(certificates);
        } else {
          console.log(
            `There was an error fetching the certifications: ${udemy_certs.status}`,
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCertifications();
  }, []);

  const trail = useTrail(certifications.length, {
    from: isVisible ? { opacity: 0 } : { opacity: 1 },
    to: isVisible ? { opacity: 1 } : { opacity: 0 },
    config: { duration: 200 },
  });

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <animated.div style={styles} className="certification-container">
        <h2 className="udemy-title">Udemy Certificates</h2>
        <div className="certifications">
          {trail.map((props, index) => {
            const cert: any = certifications[index];
            return (
              <animated.a
                key={index}
                style={props}
                href={`/${cert.link}`}
                target="_blank"
              >
                <div className="udemy">
                  <img src={udemy} />
                  <div>
                    <p>
                      {cert.title.substring(0, 50)}
                      {cert.title.length > 50 ? '...' : null}
                    </p>
                    <p>Issued: {cert.issued}</p>
                  </div>
                </div>
              </animated.a>
            );
          })}
        </div>
      </animated.div>
    </VisibilitySensor>
  );
};

export default Certifications;
