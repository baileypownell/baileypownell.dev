import { Box, Button, Stack, useTheme } from '@mui/material';
import { animated, easings, Spring, useTrail } from 'react-spring';
import me from '../../images/pfp.jpg';
import Footer from '../Footer/Footer';
import './LandingImage.scss';

const LandingImage = () => {
  const theme = useTheme();
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
      href: '/bailey_pownell_resume.pdf',
    },
  ];

  const trail = useTrail(buttons.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 250, delay: 100 },
  });

  return (
    <Box className="landing-screen">
      <Stack alignItems="center" padding={5} spacing={3}>
        <Spring
          from={{ opacity: 0, transform: 'scale(0.9) translateX(-300px)' }}
          to={{ opacity: 1, transform: 'scale(1) translateX(0)' }}
          config={{ duration: 1000 }}
        >
          {(styles: any) => (
            <animated.img
              style={styles}
              id="profile-image"
              src={me}
              alt="Me at one of my favorite restaurants holding a watermelon cosmo"
            />
          )}
        </Spring>
        <Box paddingTop={4}>
          <Box className="points">
            <Spring
              from={{ opacity: 0, transform: 'scale(0.9)' }}
              to={{ opacity: 1, transform: 'scale(1)' }}
              config={{ duration: 500 }}
            >
              {(styles: any) => (
                <animated.h1 style={styles}>
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: '100px',
                      fontFamily: `'Raleway', sans-serif`,
                      [theme.breakpoints.up('md')]: {
                        fontSize: '150px',
                      },
                      [theme.breakpoints.up('lg')]: {
                        fontSize: '200px',
                      },
                    }}
                  >
                    Hello,
                  </Box>
                  <br /> my name is Bailey
                </animated.h1>
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
                <animated.h2 style={styles}>
                  My areas of practice include Javascript/Typescript, Node,
                  Angular, and React.
                </animated.h2>
              )}
            </Spring>
          </Box>

          <Stack
            alignItems="center"
            sx={{
              [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
              },
            }}
          >
            {trail.map((props, index) => {
              const button = buttons[index];
              return (
                <animated.div key={button.href}  style={props}>
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
                </animated.div>
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
