// rafce
import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, MovieInformation, NavBar, Profile } from '.';

import useStyles from './styles';
import useAlan from './Alan';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <NavBar /> */}
      <NavBar />
      <main className={classes.appContent}>
        <div className={classes.appToolbar} />
        <Switch>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};
export default App;
