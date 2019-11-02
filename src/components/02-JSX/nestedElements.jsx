import React from 'react';

class NestedElements extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>Nested Elements</span>
        <h1>Header</h1>
        <h2>Content</h2>
        <p>This is the content!!!</p>
      </div>
    );
  }
}

export default NestedElements;
