import React from "react";
import Content from "./Content";

class ComplexForm extends React.Component {
  state = {
    data: "Initial data..."
  };

  updateState = e => {
    this.setState({ data: e.target.value });
  };
  render() {
    return (
      <div className="test-app">
        <span className="title">complex forms</span>
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

export default ComplexForm;
