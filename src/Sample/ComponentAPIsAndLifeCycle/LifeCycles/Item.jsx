import React from 'react';

class Item extends React.Component {
  componentDidMount() {
    console.log('Component DID MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!');
  }

  render() {
    return (
      <div className='number'>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default Item;
