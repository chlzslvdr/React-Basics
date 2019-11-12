import React from "react";
import Item from "./Item";

class LifeCycles extends React.Component {
  state = {
    data: 0
  };

  incrementNumber = () => {
    this.setState({ data: this.state.data + 1 });
  };

  decrementNumber = () => {
    this.setState({ data: this.state.data - 1 });
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">component life cycles</span>
        <div className="form-item">
          <button className="click-btn" onClick={this.incrementNumber}>
            INCREMENT
          </button>
          <button className="click-btn" onClick={this.decrementNumber}>
            DECREMENT
          </button>
          <Item className="item" myNumber={this.state.data}></Item>
        </div>
      </div>
    );
  }
}

export default LifeCycles;
