import home from '../../../images/3bdhome.jpg'
import spotify from '../../../images/spotify-3bd.png'
import footer from '../../../images/footer-3bd.png'

const ThreeBeersProjectPage = () => {
  return (
    <div className="project-page">
      <input style={{display: 'none'}} tabIndex={1}></input>
      <h4>Three Beers Deep Band Website</h4>
      <img title="homepage" className="project-photo" src={home} ></img>
      <h3>
        This is a single-page website built with vanilla javascript and SASS, bundled with webpack and Babel for browser 
        compatibility. It includes parallax effects and a Spotify player integration.
      </h3>
      <img title="spotify" className="project-photo" src={spotify}></img>
      <h3>I used PHP for the back end.</h3>
      <img title="project footer" className="project-photo" src={footer}></img>
      <div className="button-holder">
          <a target="_blank" href="https://github.com/baileypownell/3-Beers-Deep"><button>View Source Code</button></a>
      </div>
    </div>
  )
}

export default ThreeBeersProjectPage
