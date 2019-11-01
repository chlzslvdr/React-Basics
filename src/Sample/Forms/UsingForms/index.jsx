import React from 'react';
import './style.scss';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...',
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div className='test-app'>
        <input
          type='text'
          value={this.state.data}
          onChange={this.updateState}
          className='input'
        />
        <span className='text'>{this.state.data}</span>
      </div>
    );
  }
}

export default Forms;
