import React from "react";
import Content from "./Content";

class ChildEvents extends React.Component {
  state = {
    data: "Initial data..."
  };

  updateState = () => {
    this.setState({ data: "Data updated from the child component..." });
  };
  render() {
    return (
      <div className="test-app">
        <span className="title">child events</span>
        <div className="form-item">
          <Content
            myDataProp={this.state.data}
            updateStateProp={this.updateState}
          />
        </div>
      </div>
    );
  }
}

export default ChildEvents;
