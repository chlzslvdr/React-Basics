import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>higher order components</span>
        <div className='form-item'>
          <h3>{this.props.data}</h3>
        </div>
      </div>
    );
  }
}

export default MyComponent;
