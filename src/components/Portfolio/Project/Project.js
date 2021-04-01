import React from 'react';
import { withRouter } from 'react-router-dom';
import RWT from '../../../../dist/images/user-interface.png';
import VC from '../../../../dist/images/desktop_dashboard.png';
import ISBA from '../../../../dist/images/ISBA.jpg';
import BW from '../../../../dist/images/3bdhome.jpg';
import './Project.scss';
import { SideSheet } from 'evergreen-ui'
import { VirtualCookbookProjectPage, WeightTrackerProjectPage, ThreeBeersProjectPage, ISBAProjectPage } from '../../../components/index'

class Project extends React.Component {

  state = {
    name: '',
    github_link: '',
    prod_link: '',
    images: [],
    background_image: '',
    video: '',
    background_image: '',
    textblurbs: [],
    isShown: false
  }

  determineBackground = () => {
    switch(this.props.name) {
      case 'React Weight Tracker Web App':
        this.setState({
          background_image: RWT
        })
        break;
      case 'Virtual Cookbook SPA':
        this.setState({
          background_image: VC
        })
        break;
      case 'Redesign of the Indiana State Bar website':
        this.setState({
          background_image: ISBA
        });
      break;
      case 'Band Website':
        this.setState({
          background_image: BW
        });
      break;
      default:
        this.setState({
          background_image: VC
        });
        return;
    }
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name,
      github_link: this.props.github_link,
      route_link: this.props.route_link,
      images: this.props.images,
      textblurbs: this.props.textblurbs
    })
    if (this.props.video) {
      this.setState({
        video: this.props.video
      })
    }
    if (this.props.prod_link) {
      this.setState({
        prod_link: this.props.prod_link
      })
    }
    this.determineBackground();
  }

  openSideSheet = () => {
    this.setState({ isShown: true }, () => {
      document.body.classList.add('body-hidden')
    })
  }

  closeSideSheet = () => {
    this.setState({ isShown: false }, () => {
      document.body.classList.remove('body-hidden')
    })
  }


  render() {
    const { github_link, background_image } = this.state;
    const { isShown } = this.state;

    return (
      <>
        <div className="parent fade">
          <div className="website" style={{ backgroundImage: `url(${background_image})`}}></div>
            <div className="darken">
              <div className="information-banner">
                { github_link ? <button><a href={github_link} target="_blank">View Source Code</a></button> : null }
                <button
                onClick={() => this.openSideSheet()}>Learn More</button>
            </div>
          </div>
        </div>

        <SideSheet
            isShown={isShown}
            onCloseComplete={() => this.closeSideSheet()}
          >
          { this.props.name === 'React Weight Tracker Web App' ? <WeightTrackerProjectPage></WeightTrackerProjectPage> : null }
          { this.props.name === 'Virtual Cookbook SPA' ? <VirtualCookbookProjectPage></VirtualCookbookProjectPage> : null }
          { this.props.name === 'Band Website' ? <ThreeBeersProjectPage></ThreeBeersProjectPage> : null }
          { this.props.name === 'Redesign of the Indiana State Bar website' ? <ISBAProjectPage></ISBAProjectPage> : null }
        </SideSheet>
      </>
    )
  }
}

export default withRouter(Project);
