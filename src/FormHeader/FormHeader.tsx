import React, { Component } from "react";
import "./FormHeader.scss";

type FormHeaderState = {
  name: string;
  img: string;
};

export default class FormHeader extends Component<
  { PaymentMethods: FormHeaderState[] },
  { active: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0
    };
  }

  toggle(index: number) {
    this.setState({ active: index });
  }

  render() {
    let btns = [];
    for (let index = 0; index < this.props.PaymentMethods.length; index++) {
      btns.push(
        <div
          className={this.state.active === index ? "btn active" : "btn"}
          key={index}
          onClick={() => this.toggle(index)}
        >
          <div
            className="img"
            style={{
              backgroundImage: `url(${this.props.PaymentMethods[index].img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left"
            }}
          ></div>
          <span className="name">{this.props.PaymentMethods[index].name}</span>
          <div
            className={this.state.active === index ? "check active" : "check"}
          ></div>
        </div>
      );
    }
    return (
      <div className="FormHeader-container">
        <h3 id="head">Last step!</h3>
        <span id="par">Enter your payment info below.</span>
        <div id="btn-container">{btns}</div>
      </div>
    );
  }
}
