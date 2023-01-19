import logo from '../../../images/cover-dark.png';
import video from '../../../images/happy-balance-demo.mp4';
import main from '../../../images/happy-balance.png';
import mobile from '../../../images/happy-balance-mobile.png';

function WeightTrackerProjectPage() {
  return (
    <div className="project-page">
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
      <h3>
        This weight tracker app is a straightforward application whereby users
        can log their weight, view their weight history via graphs and tables,
        and set goals for themselves.
      </h3>
      <img
        title="main project photo"
        className="project-photo"
        src={main}
      ></img>
      <h3>Built with React, Typescript, MUI, Firebase, Chart.js & Netlify.</h3>
      <img
        title="mobile view"
        className="project-photo mobile-view"
        src={mobile}
      ></img>
      <div className="button-holder">
        <a
          target="_blank"
          rel="noopener"
          href="https://happy-balance-app.netlify.app/"
        >
          <button>Visit Application</button>
        </a>
        <a
          target="_blank"
          href="https://github.com/baileypownell/happy_balance"
        >
          <button>View Source Code</button>
        </a>
      </div>
    </div>
  );
}

export default WeightTrackerProjectPage;
