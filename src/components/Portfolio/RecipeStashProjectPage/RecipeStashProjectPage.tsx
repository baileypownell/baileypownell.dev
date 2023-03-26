import './RecipeStashProjectPage.scss';
import logo from '../../../images/white-logo.png';
import video from '../../../images/recipe-stash-demo-muted.mp4';
import main from '../../../images/recipe-stash-main.png';
import main2 from '../../../images/recipe-stash-recipe.png';
import main3 from '../../../images/recipe-stash-editing.png';
import mobile from '../../../images/mobile-recipe-stash-recipe.png';
import { Button, Stack } from '@mui/material';

const RecipeStashProjectPage = () => {
  return (
    <div className="project-page">
      <input style={{ display: 'none' }} tabIndex={1}></input>
      <img title="logo" className="logo" src={logo}></img>
      <video
        style={{ display: 'block', width: '100%' }}
        controls
        muted
        width="250"
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <img className="project-photo" src={main}></img>
      <h3>
        Built with React, TypeScript, Node, AWS, MUI, and Postgres, Recipe Stash
        is a fullstack SPA whereby users can add recipes, duplicate them, tag
        them with various categories (sugar-free, dairy-free, vegan, etc), &
        upload pictures. For fun (and not because this is necessarily a good
        idea), I decided to handle authentication myself, using session-based
        authentication after being heavily influenced by this
        <a
          target="_blank"
          href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/"
          style={{ marginLeft: '3px' }}
        >
          very convincing article against using JWTs for authentication purposes
        </a>
        .
      </h3>
      <img className="project-photo" src={main2}></img>
      <img className="project-photo" src={main3}></img>
      <img
        title="mobile view"
        className="project-photo mobile-view"
        src={mobile}
      ></img>
      <Stack
        justifyContent="center"
        alignItems="center"
        padding="15px 0px 30px 0px"
        className="button-holder"
      >
        <a target="_blank" href="https://recipe-stash-1.herokuapp.com/">
          <Button variant="contained">Visit Application</Button>
        </a>
        <a target="_blank" href="https://github.com/baileypownell/recipe_stash">
          <Button variant="contained">View Source Code</Button>
        </a>
      </Stack>
    </div>
  );
};

export default RecipeStashProjectPage;
