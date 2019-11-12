import React from "react";
import Header from "./Header";
import Content from "./Content";

class StateAndProps extends React.Component {
  state = {
    header: "Header from props...",
    content: "Content from props..."
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">state and props</span>
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}

export default StateAndProps;
