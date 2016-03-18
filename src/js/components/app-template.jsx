import React from 'react';
import Header from './header/app-header';

import '../../styles/index';


export default(props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
