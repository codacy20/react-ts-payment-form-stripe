import React, { Component } from "react";
import "./FormHeader.scss";

type FormHeaderState = {
  time: Date;
};
export default class FormHeader extends Component<{}, FormHeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="FormHeader-container">
        <p>The current time is {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
