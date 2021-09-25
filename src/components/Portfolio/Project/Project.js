import React from 'react'
import { withRouter } from 'react-router-dom'
import RWT from '../../../../dist/images/happy-balance.png'
import VC from '../../../../dist/images/recipe-stash-dashboard.png'
import ISBA from '../../../../dist/images/ISBA.jpg'
import BW from '../../../../dist/images/3bdhome.jpg'
import './Project.scss'
import { SideSheet, Position, ArrowLeftIcon } from 'evergreen-ui'
import { VirtualCookbookProjectPage, WeightTrackerProjectPage, ThreeBeersProjectPage, ISBAProjectPage } from '../../../components/index'

const Projects = {
  ISBA: 'isba', 
  COOKBOOK: 'cookbook', 
  WEIGHT_TRACKER: 'weight-tracker', 
  BAND_WEBSITE: 'band-website'
}

class Project extends React.Component {

  state = {
    showButton: false,
    background_image: '',
    isShown: false
  }

  determineBackground = () => {
    switch(this.props.id) {
      case Projects.WEIGHT_TRACKER:
        this.setState({
          background_image: RWT
        })
        break;
      case Projects.COOKBOOK:
        this.setState({
          background_image: VC
        })
        break;
      case Projects.ISBA:
        this.setState({
          background_image: ISBA
        });
      break;
      case Projects.BAND_WEBSITE:
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
    this.determineBackground()
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({showButton: window.innerWidth <= 1000});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  openSideSheet = () => {
    this.setState({ isShown: true })
  }

  closeSideSheet = () => {
    this.setState({ isShown: false })
  }


  render() {
    const { background_image, showButton, isShown } = this.state;
    const { github_link, id } = this.props

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
            width={1000}
            isShown={isShown}
            preventBodyScrolling={true}
            position={Position.RIGHT}
            onCloseComplete={() => this.closeSideSheet()}
          >
            <div class="side-sheet-content">
                { showButton ? <button onClick={this.closeSideSheet}><ArrowLeftIcon size={16} marginRight={8} /> Close </button> : null }
                { id === Projects.WEIGHT_TRACKER ? <WeightTrackerProjectPage></WeightTrackerProjectPage> : null }
                { id === Projects.COOKBOOK ? <VirtualCookbookProjectPage></VirtualCookbookProjectPage> : null }
                { id === Projects.BAND_WEBSITE ? <ThreeBeersProjectPage></ThreeBeersProjectPage> : null }
                { id === Projects.ISBA ? <ISBAProjectPage></ISBAProjectPage> : null }
            </div>
        </SideSheet>
      </>
    )
  }
}

export default withRouter(Project);
