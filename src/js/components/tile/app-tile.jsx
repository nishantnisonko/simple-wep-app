import React from 'react';
import AppActions from '../../actions/app-actions';
import Button from './app-button';
import {Link} from 'react-router';

export default(props) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-3">
      <h4>{props.tile.title}</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>

      <div className="btn-group">
        <Link to={`/config/${props.tile.id}`} className="btn btn-sm btn-default">Config</Link>
        {/*<Button handler={AppActions.removeTile.bind(null, props.tile)} txt="Remove Tile"/>*/}

      </div>

    </div>
  )
}
