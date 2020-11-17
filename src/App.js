import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Application from './pages/Application';
import Applications from './pages/Applications';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/'}`}
          component={Login}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/home'}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/applications'}`}
          component={Applications}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/application/:appId'}`}
          component={Application}
        />
      </Switch>
    </Router>
  );
};

export default App;
