import React, { Component } from 'react';
import FirstChild from './firstChild';

class ParentComponent extends Component {
  render() {
    return (
      <FirstChild
        headerProp='Header from props...'
        contentProp='Content from props...'
      />
    );
  }
}

export default ParentComponent;
