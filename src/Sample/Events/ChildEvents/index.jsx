import React from 'react';
import './style.scss';
import Content from './Content';

class ChildEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...',
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ data: 'Data updated from the child component...' });
  }
  render() {
    return (
      <div className='test-app'>
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        ></Content>
      </div>
    );
  }
}

export default ChildEvents;
