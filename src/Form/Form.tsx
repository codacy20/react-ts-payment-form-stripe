import React, { Component } from "react";
import "./Form.scss";

type FormState = {
  time: Date;
};
export default class Form extends Component<{}, FormState> {
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
      <div className="Form-container">
        <p>The current time is {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
