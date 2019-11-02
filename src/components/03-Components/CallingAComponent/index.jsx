import React from 'react';
import ParentComponent from './parentComponent';

const CallingAComponent = () => {
  return (
    <div className='test-app'>
      <span className='title'>calling a component</span>
      <ParentComponent />
    </div>
  );
};

export default CallingAComponent;
