import React, { Component } from 'react';
import FirstChild from './firstChild';

class ParentComponent extends Component {
  render() {
    return <FirstChild />;
  }
}

export default ParentComponent;
