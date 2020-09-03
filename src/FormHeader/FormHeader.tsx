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
        <h3 id="head">Last step!</h3>
        <span id="par">Enter your payment info below.</span>
        <div id="btn-container">
          <div className="btn">
            <div className="img img1"></div>
            <span className="name">credit card</span>
            <div className="check"></div>
          </div>
          <div className="btn">
            <div className="img img2"></div>
            <span className="name">paypal</span>
            <div className="check"></div>
          </div>
        </div>
      </div>
    );
  }
}
