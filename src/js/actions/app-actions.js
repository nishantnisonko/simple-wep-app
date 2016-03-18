import AppConstants from '../constants/app-constants';
import $ from 'jquery';

import {
  dispatch,
  register
} from '../dispatchers/app-dispatcher';

export default {
  addTile(item) {
      dispatch({
        actionType: AppConstants.ADD_TILE,
        item
      })
    },
    saveQuery(item) {
      dispatch({
        actionType: AppConstants.CHANGE_QUERY,
        item
      })
    },
    removeTile(item){
      dispatch({
        actionType: AppConstants.REMOVE_TILE,
        item
      })
    },
    testQuery(item) {

      $.when($.ajax({
        url: "http://localhost:3000/explore?q=" + item.query,
        type: "GET",
        cache: false
      })).then(function(res, textStatus, jqXHR) {
        console.log(res);
        var response = JSON.parse(res)
        if (response.status === 'success') {
          item.queryResult = JSON.parse(response.rows);
          item.queryError='';
        } else {
          item.queryResult =[];
          item.queryError = response.error;
        }
        dispatch({
          actionType: AppConstants.TEST_QUERY,
          item
        })
      });


    },
    saveConfig(item) {
      dispatch({
        actionType: AppConstants.SAVE_CONFIG,
        item
      })
    }
}
