import home from '../../../images/3bdhome.jpg';
import spotify from '../../../images/spotify-3bd.png';
import footer from '../../../images/footer-3bd.png';
import { Box, Button } from '@mui/material';

const ThreeBeersProjectPage = () => {
  return (
    <Box className="project-page">
      <input style={{ display: 'none' }} tabIndex={1}></input>
      <h4>Three Beers Deep Band Website</h4>
      <img title="homepage" className="project-photo" src={home}></img>
      <h3>
        Before I got into javascript frameworks, I built this SPA for a band I
        was in with vanilla javascript and SASS, bundled with webpack and Babel.
        I included custom parallax effects, a Spotify player integration, and a
        minimal back end in PHP.
      </h3>
      <img title="spotify" className="project-photo" src={spotify}></img>
      <img title="project footer" className="project-photo" src={footer}></img>
      <Box className="button-holder">
        <a target="_blank" href="https://github.com/baileypownell/3-Beers-Deep">
          <Button variant="contained">View Source Code</Button>
        </a>
      </Box>
    </Box>
  );
};

export default ThreeBeersProjectPage;
