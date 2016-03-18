import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import Tile from './app-tile';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import Button from './app-button';

const getTiles = () => {
  return {tiles: AppStore.getTiles()};
}

const Tiles = (props) => {
  let tiles = props.tiles.map(tile => {
    return <Tile key={tile.id} tile={tile}/>
  });

  return (
    <div>
      <div className="row">
        <Button handler={AppActions.addTile.bind(null, null)} txt="Add Tile"/>
      </div>

      <div className="row">
        {tiles}
      </div>
    </div>
  );
}

export default StoreWatchMixin(Tiles, getTiles);
