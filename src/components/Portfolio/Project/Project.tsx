import { Box, Button, Stack } from '@mui/material';
import { ArrowLeftIcon, Position, SideSheet } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import BW from '../../../images/3bdhome.jpg';
import RWT from '../../../images/happy-balance.png';
import ISBA from '../../../images/ISBA.jpg';
import VC from '../../../images/recipe-stash-dashboard.png';
import {
  ISBAProjectPage,
  RecipeStashProjectPage,
  ThreeBeersProjectPage,
  WeightTrackerProjectPage,
} from '../../index';
import './Project.scss';

const Projects = {
  ISBA: 'isba',
  COOKBOOK: 'cookbook',
  WEIGHT_TRACKER: 'weight-tracker',
  BAND_WEBSITE: 'band-website',
};

const Project = (props: any) => {
  const [showButton, setShowButton] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isShown, setIsShown] = useState(false);

  const determineBackground = () => {
    switch (props.id) {
      case Projects.WEIGHT_TRACKER:
        setBackgroundImage(RWT);
        break;
      case Projects.COOKBOOK:
        setBackgroundImage(VC);
        break;
      case Projects.ISBA:
        setBackgroundImage(ISBA);
        break;
      case Projects.BAND_WEBSITE:
        setBackgroundImage(BW);
        break;
      default:
        setBackgroundImage(VC);
        return;
    }
  };

  useEffect(() => {
    determineBackground();
    window.addEventListener('resize', resize.bind(this));
    resize();

    return () => {
      window.removeEventListener('resize', resize.bind(this));
    };
  }, []);

  const resize = () => {
    setShowButton(window.innerWidth <= 1000);
  };

  const openSideSheet = () => {
    setIsShown(true);
  };

  const closeSideSheet = () => {
    setIsShown(false);
  };

  const { github_link, id } = props;

  return (
    <>
      <Box className="parent">
        <Box
          className="website"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></Box>
        <Box className="darken">
          <Stack spacing={1} className="information-banner">
            {github_link ? (
              <Button variant="contained">
                <a href={github_link} target="_blank">
                  View Source Code
                </a>
              </Button>
            ) : null}
            <Button variant="contained" onClick={() => openSideSheet()}>
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>

      <SideSheet
        width={1000}
        isShown={isShown}
        preventBodyScrolling={true}
        position={Position.RIGHT}
        onCloseComplete={() => closeSideSheet()}
      >
        <Box className="side-sheet-content">
          {showButton ? (
            <Button
              startIcon={<ArrowLeftIcon size={16} marginRight={8} />}
              onClick={closeSideSheet}
            >
              Close
            </Button>
          ) : null}
          {id === Projects.WEIGHT_TRACKER ? (
            <WeightTrackerProjectPage></WeightTrackerProjectPage>
          ) : null}
          {id === Projects.COOKBOOK ? (
            <RecipeStashProjectPage></RecipeStashProjectPage>
          ) : null}
          {id === Projects.BAND_WEBSITE ? (
            <ThreeBeersProjectPage></ThreeBeersProjectPage>
          ) : null}
          {id === Projects.ISBA ? <ISBAProjectPage></ISBAProjectPage> : null}
        </Box>
      </SideSheet>
    </>
  );
};

export default Project;
