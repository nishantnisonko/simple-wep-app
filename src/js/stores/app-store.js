import AppConstants from '../constants/app-constants';
import {
  register
} from '../dispatchers/app-dispatcher';
import TileAPI from '../api/TileAPI';
import $ from 'jquery';

import Promise from "bluebird";

import {
  EventEmitter
} from 'events';

const CHANGE_EVENT = 'change'


const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getTiles() {
    return TileAPI.tiles;
  },

  // testQuery(tile) {
  //   $.when($.ajax({
  //     url: "http://localhost:3000/explore?q=" + tile.query,
  //     type: "GET",
  //     cache: false
  //   })).then(function(res, textStatus, jqXHR) {
  //     console.log(res);
  //     var response = JSON.parse(res)
  //     TileAPI.setQueryResult(tile, response);
  //   });
  // },

  dispatcherIndex: register(function(action) {
    switch (action.actionType) {
      case AppConstants.ADD_TILE:
        TileAPI.addTile(action.item);
        break;
      case AppConstants.SAVE_CONFIG:
        TileAPI.saveConfig(action.item);
        break;
      case AppConstants.CHANGE_QUERY:
        TileAPI.changeQuery(action.item);
        break;
      case AppConstants.TEST_QUERY:
        TileAPI.setQueryResult(action.item);
        break;
      case AppConstants.REMOVE_TILE:
        TileAPI.removeTile(action.item);
        break;

    }
    AppStore.emitChange();

  })
});

export default AppStore
