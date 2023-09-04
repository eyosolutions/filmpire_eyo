// rafce
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, MovieInformation, NavBar, Profile } from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <NavBar /> */}
      <NavBar />
      <main className={classes.appContent}>
        <div className={classes.appToolbar} />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/movies/:id">
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
    </div>
  );
};
export default App;
