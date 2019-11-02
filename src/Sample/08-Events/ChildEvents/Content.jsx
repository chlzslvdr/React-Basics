import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <button className='click-me-btn' onClick={this.props.updateStateProp}>
          CLICK
        </button>
        <span className='text'>{this.props.myDataProp}</span>
      </div>
    );
  }
}

export default Content;
