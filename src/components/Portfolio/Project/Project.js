import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../Modal/Modal';
import RWT from '../../../images/userinterface.jpg';
import VC from '../../../images/VChomescreen.png';
import MF from '../../../images/millsFarmsHome.jpg';
import WA from '../../../images/weather.png';
import ISBA from '../../../images/ISBA.jpg';
import BW from '../../../images/3bdhome.jpg';
import MP from '../../../images/meal-picker.PNG';
import './Project.scss';

class Project extends React.Component {

  state = {
    name: '',
    github_link: '',
    prod_link: '',
    images: [],
    background_image: '',
    video: '',
    background_image: '',
    open: false,
    textblurbs: []
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
      case 'Sample Beef Farm site':
        this.setState({
          background_image: MF
        });
        break;
      case 'Local Weather App':
        this.setState({
          background_image: WA
        });
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
      case 'Meal Picker App':
        this.setState({
          background_image: MP
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

  toggleModal = () => {
    // this.setState(prevState => ({
    //   open: !prevState.open
    // }));
    this.props.history.push("/project");

  }


  render() {
    const { github_link, background_image, open, name, images, textblurbs, prod_link, video } = this.state;

    return (
      <>
      <div className="parent fade">
        <div className="website" style={{ backgroundImage: `url(${background_image})`}}></div>
          <div className="darken">
            <div className="information-banner">
              <button><a href={github_link} target="_blank">View Source Code</a></button>
              <button className="modalBtn" onClick={this.toggleModal}>Learn More</button>
          </div>
        </div>
      </div>
      {open ?
        <Modal
          video={video}
          title={name}
          images={images}
          textblurbs={textblurbs}
          prod_link={prod_link}
          toggleModal={this.toggleModal}
        />
      : null}
      </>
    )
  }
}

export default withRouter(Project);
