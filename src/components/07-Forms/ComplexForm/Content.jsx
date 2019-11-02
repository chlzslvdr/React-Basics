import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.myDataProp}
          onChange={this.props.updateStateProp}
          className='input'
        />
        <span className='text'>{this.props.myDataProp}</span>
      </div>
    );
  }
}

export default Content;
