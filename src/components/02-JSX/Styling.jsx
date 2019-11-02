import React from 'react';

class Styling extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>Styling</span>
        <br />
        <h3 className='header'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <h4 style={{ color: 'green' }}>Lorem ipsum dolor sit, amet.</h4>
      </div>
    );
  }
}

export default Styling;
