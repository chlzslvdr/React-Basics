import React from 'react';
import ParentComponent from './parentComponent';

const CallingAComponent = () => {
  return (
    <div className='test-app'>
      <ParentComponent />
    </div>
  );
};

export default CallingAComponent;
