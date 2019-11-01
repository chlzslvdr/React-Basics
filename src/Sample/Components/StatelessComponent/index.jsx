import React from 'react';
import Header from './Header';
import Content from './Content';

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default StatelessComponent;
