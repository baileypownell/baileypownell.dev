import links from '../../../images/isba_links.jpg';
import mobile_nav from '../../../images/isba_mobile_nav.png';

const ISBAProjectPage = () => {
  return (
    <div className="project-page">
      <input style={{ display: 'none' }} tabIndex={1}></input>
      <h4>Redesign of the Indiana State Bar website</h4>
      <h3>
        While not a good example of my current skillset, this redesign of the
        Indiana State Bar website was one of my first projects several years
        ago.
      </h3>
      <h3>
        My objectives here included using SASS, parallax scrolling, jQuery, and
        vanilla Javascript effects.
      </h3>
      <img title="page with links" className="project-photo" src={links}></img>
      <img
        title="mobile preview"
        className="project-photo mobile-view"
        src={mobile_nav}
      ></img>
      <div className="button-holder">
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/baileypownell/Indiana-State-Bar-Redesign"
        >
          <button>View Source Code</button>
        </a>
      </div>
    </div>
  );
};

export default ISBAProjectPage;
