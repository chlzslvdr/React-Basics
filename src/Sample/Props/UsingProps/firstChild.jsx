import React from 'react';

class FirstChild extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}

FirstChild.defaultProps = {
  headerProp: 'Header from props...',
  contentProp: 'Content from props...',
};

export default FirstChild;
