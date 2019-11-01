import React from 'react';
import './style.scss';

class UsingEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...',
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ data: 'Data updated...' });
  }

  render() {
    return (
      <div className='test-app'>
        <button className='click-btn' onClick={this.updateState}>
          CLICK
        </button>
        <span className='text'>{this.state.data}</span>
      </div>
    );
  }
}

export default UsingEvents;
