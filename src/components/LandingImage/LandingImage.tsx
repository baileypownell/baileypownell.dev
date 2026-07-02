import { Box, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { animated, easings, Spring, useTrail } from 'react-spring';
import me from '../../images/summit_alt.jpg';
import Footer from '../Footer/Footer';
import './LandingImage.css';

const LandingImage = () => {
  const AnimatedH1 = animated('h1');
  const AnimatedH2 = animated('h2');
  const AnimatedH3 = animated('h3');
  const AnimatedImg = animated('img');
  const AnimatedDiv = animated('div');
  const theme = useTheme();
  const minWidth800 = useMediaQuery('(min-width:800px)');
  const minWidth1200 = useMediaQuery('(min-width:1200px)');
  const isSmallViewport = useMediaQuery(theme.breakpoints.down('md'));
  const buttons = [
    {
      text: 'Github',
      classesString: 'fab fa-github',
      href: 'https://github.com/baileypownell',
    },
    {
      text: 'LinkedIn',
      classesString: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/bailey-pownell-224606167/',
    },
    {
      text: 'Resume',
      classesString: 'fas fa-file',
      href: '/Resume.pdf',
    },
  ];

  const trail = useTrail(buttons.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 250, delay: 100 },
  });

  return (
    <Box className="landing-screen" sx={{ height: '100vh' }}>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: minWidth800 ? 'row' : 'column',
          height: '100%',
          p: isSmallViewport ? 3 : 0,
        }}
      >
        <Spring
          from={{ opacity: 0, transform: 'scale(0.9) translateX(-300px)' }}
          to={{ opacity: 1, transform: 'scale(1) translateX(0)' }}
          config={{ duration: 1000 }}
        >
          {(styles: any) => (
            <AnimatedImg
              style={styles}
              id="profile-image"
              src={me}
              alt="At the summit of Lily Mountain, Colorado"
            />
          )}
        </Spring>
        <Box
          sx={{ paddingTop: 2, marginLeft: minWidth1200 ? '100px' : '25px' }}
        >
          <Box className="points">
            <Spring
              from={{ opacity: 0, transform: 'scale(0.9)' }}
              to={{ opacity: 1, transform: 'scale(1)' }}
              config={{ duration: 500 }}
            >
              {(styles: any) => (
                <AnimatedH1 style={styles}>Bailey Pownell</AnimatedH1>
              )}
            </Spring>
            <Spring
              from={{ opacity: 0, transform: 'translateX(200px)' }}
              to={{ opacity: 1, transform: 'translateX(0)' }}
              config={{
                duration: 1000,
                easing: easings.easeInOutQuart,
              }}
            >
              {(styles: any) => (
                <div>
                  <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
                    <AnimatedH2 style={styles}>
                      Frontend Software Developer
                    </AnimatedH2>
                  </Box>

                  <Stack sx={{ paddingTop: 2, spacing: 3 }}>
                    <Box>
                      <AnimatedH3 style={styles}>
                        Typescript | Node | Angular | React
                      </AnimatedH3>
                    </Box>
                    <Box>
                      <AnimatedH3 style={styles}>
                        Component testing | Dependency management | Acessibility
                      </AnimatedH3>
                    </Box>
                  </Stack>
                </div>
              )}
            </Spring>
          </Box>

          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: minWidth800 ? 'flex-end' : 'center',
              flexDirection: minWidth800 ? 'row' : 'column',
              paddingTop: 4,
            }}
          >
            {trail.map((props, index) => {
              const button = buttons[index];
              return (
                <AnimatedDiv key={button.href} style={props}>
                  <Button
                    href={button.href}
                    target="_blank"
                    role="link"
                    aria-label={`Open a new tab to view ${button.text}`}
                    startIcon={
                      <i
                        style={{ marginLeft: '5px', marginRight: '5px' }}
                        className={button.classesString}
                      ></i>
                    }
                    sx={{
                      margin: '5px',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      backgroundColor: theme.palette.secondary.main,
                      boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
                      color: theme.palette.info.main,
                      '&:hover': {
                        boxShadow: `0px 0px 20px ${theme.palette.secondary.dark}`,
                        backgroundColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {button.text}
                  </Button>
                </AnimatedDiv>
              );
            })}
          </Stack>
        </Box>
      </Stack>

      <Footer />
    </Box>
  );
};

export default LandingImage;
