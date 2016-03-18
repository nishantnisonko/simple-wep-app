import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Template from './app-template';
import Tiles from './tile/app-tiles';
import TileConfig from './config/app-tileconfig';
let {Component, PropTypes} = React;

export default() => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Tiles}/>
        <Route path="config/:tileId" component={TileConfig}/>
      </Route>
    </Router>
  );
}
