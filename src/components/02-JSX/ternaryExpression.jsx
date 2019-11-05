import React from 'react';

class TernaryExpression extends React.Component {
  render() {
    var i = 1;
    return (
      <div className='test-app'>
        <span className='title'>ternary expression</span>
        <div className='container'>
          <h1>{i === 1 ? 'True!' : 'False'}</h1>
        </div>
      </div>
    );
  }
}

export default TernaryExpression;
