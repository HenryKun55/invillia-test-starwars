import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Character from './pages/Character';
import StarsShip from './pages/StarsShip';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/character/:id" component={Character} />
    <Route exact path="/starship/:name" component={StarsShip} />
  </Switch>
);

export default Routes;
