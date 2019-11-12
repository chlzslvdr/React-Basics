import React from "react";

class usingState extends React.Component {
  state = {
    header: "Header from state...",
    content: "Content from state..."
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">State</span>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}

export default usingState;
