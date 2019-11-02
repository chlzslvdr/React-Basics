import React from 'react';
import ParentComponent from './parentComponent';

class DefaultProps extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>default props</span>
        <ParentComponent />
      </div>
    );
  }
}

export default DefaultProps;
