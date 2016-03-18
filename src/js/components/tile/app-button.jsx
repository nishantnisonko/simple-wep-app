import React from 'react';
import AppStore from '../../stores/app-store';

export default (props) =>{
  return(
    <button
      className="btn btn-default btn-sm"
      onClick={props.handler}>
      {props.txt}
    </button>
  )
}
