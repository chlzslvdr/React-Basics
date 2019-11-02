import React from 'react';
import Content from './Content';

class ComplexForm extends React.Component {
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
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        ></Content>
      </div>
    );
  }
}

export default ComplexForm;
