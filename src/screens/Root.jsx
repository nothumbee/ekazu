import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import StudentPage from './Student';
import AdminPage from './Admin';
import LandingPage from './Landing';

import * as ROUTES from '../constants/routes';

const ScreensRoot = props => {
  return (
    <BrowserRouter>
      <div>
        <div>{props.children}</div>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.STUDENT} component={StudentPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ScreensRoot;
