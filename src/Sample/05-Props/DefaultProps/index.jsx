import React from 'react';
import ParentComponent from './parentComponent';

class DefaultProps extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <ParentComponent />
      </div>
    );
  }
}

export default DefaultProps;
