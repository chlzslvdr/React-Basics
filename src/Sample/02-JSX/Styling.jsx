import React from 'react';

class Styling extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <h1 className='header'>Header</h1>
        <h2 style={{ color: 'green' }}>Body</h2>
      </div>
    );
  }
}

export default Styling;
