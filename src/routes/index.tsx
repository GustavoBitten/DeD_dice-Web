import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import SinglePage from '../pages/SinglePage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/2" exact component={Dashboard} />
    <Route path="/3" exact component={SignUp} />
    <Route path="/" exact component={SinglePage} />
  </Switch>
);

export default Routes;
