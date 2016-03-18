import React from 'react';
import AppStore from '../stores/app-store';

export default(InnerComponent, stateCallback) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateCallback(props);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    // console.log('mounted ', InnerComponent);
  }

  componentDidUpdate(prevProps) {
    // console.log('updated ', InnerComponent);
  }

  componentWillMount() {
    // console.log('mounting ', InnerComponent);
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnMount() {
    // console.log('unmounting ', InnerComponent);
    AppStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    // if (this.isMounted()) {
    this.setState(stateCallback(this.props));
    // }
  }

  render() {
    return (<InnerComponent {...this.state} {...this.props}/>);
  }
}
