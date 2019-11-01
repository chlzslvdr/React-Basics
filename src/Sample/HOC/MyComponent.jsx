import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

export default MyComponent;
