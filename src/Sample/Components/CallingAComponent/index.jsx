import React from 'react';
import './style.scss';
import ParentComponent from './parentComponent';

const CallingAComponent = () => {
  return (
    <div className='test-app'>
      <ParentComponent />
    </div>
  );
};

export default CallingAComponent;
