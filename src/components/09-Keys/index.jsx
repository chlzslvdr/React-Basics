import React from "react";
import Content from "./Content";

class Keys extends React.Component {
  state = {
    data: [
      {
        component: "First...",
        id: 1
      },
      {
        component: "Second...",
        id: 2
      },
      {
        component: "Third...",
        id: 3
      },
      {
        component: "Fourth...",
        id: 4
      }
    ]
  };

  render() {
    return (
      <div className="test-app">
        <span className="title">keys</span>
        <div className="form-item">
          <div>
            {this.state.data.map((dynamicComponent, i) => (
              <Content key={i} componentData={dynamicComponent} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;
