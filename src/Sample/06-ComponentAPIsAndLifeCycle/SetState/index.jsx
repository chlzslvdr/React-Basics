import React from 'react';

class SetState extends React.Component {
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
        <button onClick={this.handleClick} className='click-btn'>
          Click Me
        </button>
        <span className='name'>{this.state.name}</span>
      </div>
    );
  }
}

export default SetState;
