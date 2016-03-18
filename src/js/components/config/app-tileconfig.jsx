import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import {Link} from 'react-router';
import Button from '../tile/app-button';
import AppActions from '../../actions/app-actions';

function getTile(props) {
  console.log(props);
  let tile = AppStore.getTiles().find(({id}) => id === props.params.tileId);
  return {tile};
}
const TileConfig = (props) => {
  var rows = null;
  console.log(props.tile.queryResult);
  if (props.tile.queryResult) {
    rows = props.tile.queryResult.map(function(row) {
      return (
        <span>
          {JSON.stringify(row)}
        </span>
      )
    })
  }

  return (
    <div>
      <div className="row">
        <h4>{props.tile.title}</h4>
        <textarea placeholder={"Type in query"} defaultValue={props.tile.query} onChange={function(e) {
          AppActions.saveQuery.bind(null, {
            tile: props.tile,
            query: e.target.value
          })();
        }}/>
      </div>
      <div className="row">
        <Button handler={AppActions.testQuery.bind(null, props.tile)} txt="test"/>
      </div>

      <div className="row">

        {(props.tile.queryError === '')
          ? <p>
              {rows}
            </p>
          : <span>{props.tile.queryError}</span>}
      </div>
      <div className="row">
        <div className="btn-group">
          <Link className="btn btn-default btn-sm" to="/">Done</Link>
        </div>
      </div>

    </div>
  );
}

export default StoreWatchMixin(TileConfig, getTile);
