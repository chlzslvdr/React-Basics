import React from 'react';
import './styling.scss';

class Styling extends React.Component {
  render() {
    return (
      <div>
        <h1 className='header'>Header</h1>
        <h2 style={{ color: 'green' }}>Body</h2>
      </div>
    );
  }
}

export default Styling;
