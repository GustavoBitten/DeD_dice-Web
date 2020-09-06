import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/2" exact component={Dashboard} />
    <Route path="/" exact component={SignUp} />
  </Switch>
);

export default Routes;
