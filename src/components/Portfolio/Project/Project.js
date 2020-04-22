import React from 'react';
import Modal from '../Modal/Modal';
import RWT from '../../../images/userinterface.jpg';
import VC from '../../../images/VChomescreen.png';
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
        return;
      case 'Virtual Cookbook SPA':
        this.setState({
          background_image: VC
        })
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
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }


  render() {
    const { github_link, background_image, open, name, images, textblurbs, prod_link } = this.state;

    return (
      <>
      <div className="parent">
        <div className="website" style={{ backgroundImage: `url(${background_image})`}}></div>
          <div className="darken">
            <div className="information-banner">
              <button><a href={github_link} target="_blank">See the Code</a></button>
              <button className="modalBtn" onClick={this.toggleModal}>Learn More</button>
          </div>
        </div>
      </div>
      {open ?
        <Modal
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

export default Project;
