import React from 'react';
import Item from './Item';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
    };

    this.incrementNumber = this.incrementNumber.bind(this);
    this.decrementNumber = this.decrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  decrementNumber() {
    this.setState({ data: this.state.data - 1 });
  }

  render() {
    return (
      <div className='test-app'>
        <button className='click-btn' onClick={this.incrementNumber}>
          INCREMENT
        </button>
        <button className='click-btn' onClick={this.decrementNumber}>
          DECREMENT
        </button>
        <Item className='item' myNumber={this.state.data}></Item>
      </div>
    );
  }
}

export default Test;
