import React, { Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: 'New State !!!',
    });
  }

  render() {
    return (
      <div className='test-app'>
        <span className='title'>set state</span>
        <div className='form-item'>
          <button className='click-me-btn' onClick={this.handleClick}>
            Click Me
          </button>
          <span className='text'>{this.state.name}</span>
        </div>
      </div>
    );
  }
}

export default SetState;
