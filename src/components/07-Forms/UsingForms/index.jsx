import React from "react";

class Forms extends React.Component {
  state = {
    data: "Initial data..."
  };

  updateState = e => {
    this.setState({ data: e.target.value });
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">using forms</span>
        <div className="form-item">
          <input
            type="text"
            value={this.state.data}
            onChange={this.updateState}
            className="input"
          />
          <span className="text">{this.state.data}</span>
        </div>
      </div>
    );
  }
}

export default Forms;
