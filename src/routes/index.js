import React from 'react';

// import { Container } from './styles';
import { Switch, Route } from 'react-router-dom';
import WatchList from '../pages/WatchList';
import Watched from '../pages/Watched';
import Add from '../pages/Add';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={WatchList} />
      <Route path="/watched" component={Watched} />
      <Route path="/add" component={Add} />
    </Switch>
  );
}

export default Routes;
