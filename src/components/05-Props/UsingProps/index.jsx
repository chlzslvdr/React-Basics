import React from 'react';
import ParentComponent from './parentComponent';

class UsingProps extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>using props</span>
        <ParentComponent />
      </div>
    );
  }
}

export default UsingProps;
