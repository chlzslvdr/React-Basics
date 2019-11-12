import React from "react";

class UsingEvents extends React.Component {
  state = {
    data: "Initial data..."
  };

  updateState = () => {
    this.setState({ data: "Data updated..." });
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">using events</span>
        <div className="form-item">
          <button className="click-me-btn" onClick={this.updateState}>
            CLICK
          </button>
          <span className="text">{this.state.data}</span>
        </div>
      </div>
    );
  }
}

export default UsingEvents;
