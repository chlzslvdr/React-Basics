import React, { Component } from "react";

class SetState extends Component {
  state = {
    name: "Initial State"
  };

  handleClick = () => {
    this.setState({
      name: "New State !!!"
    });
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">set state</span>
        <div className="form-item">
          <button className="click-me-btn" onClick={this.handleClick}>
            Click Me
          </button>
          <span className="text">{this.state.name}</span>
        </div>
      </div>
    );
  }
}

export default SetState;
