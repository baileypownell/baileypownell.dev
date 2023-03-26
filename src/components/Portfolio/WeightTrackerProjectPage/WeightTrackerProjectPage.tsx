import logo from '../../../images/cover-dark.png';
import video from '../../../images/happy-balance-demo.mp4';
import main from '../../../images/happy-balance.png';
import mobile from '../../../images/happy-balance-mobile.png';
import { Box, Button, Typography } from '@mui/material';

function WeightTrackerProjectPage() {
  return (
    <Box className="project-page">
      <input style={{ display: 'none' }} tabIndex={1}></input>
      <img title="logo" className="logo" src={logo} />
      <video
        style={{ display: 'block', width: '100%' }}
        controls
        muted
        width="250"
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Typography variant="h3">
        This weight tracker app is a straightforward application whereby users
        can log their weight, view their weight history via graphs and tables,
        and set goals for themselves.
      </Typography>
      <img
        title="main project photo"
        className="project-photo"
        src={main}
      ></img>
      <Typography variant="h3">
        Built with React, Typescript, MUI, Firebase, Chart.js & Netlify.
      </Typography>
      <img
        title="mobile view"
        className="project-photo mobile-view"
        src={mobile}
      ></img>
      <Box className="button-holder">
        <a
          target="_blank"
          rel="noopener"
          href="https://happy-balance-app.netlify.app/"
        >
          <Button variant="contained">Visit Application</Button>
        </a>
        <a
          target="_blank"
          href="https://github.com/baileypownell/happy_balance"
        >
          <Button variant="contained">View Source Code</Button>
        </a>
      </Box>
    </Box>
  );
}

export default WeightTrackerProjectPage;
