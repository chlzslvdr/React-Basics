import React from 'react';
import Header from './Header';
import Content from './Content';

class StatelessComponent extends React.Component {
  render() {
    return (
      <div className='test-app'>
        <span className='title'>stateless component</span>
        <Header />
        <Content />
      </div>
    );
  }
}

export default StatelessComponent;
