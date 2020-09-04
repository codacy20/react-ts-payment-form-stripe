import React, { Component } from "react";
import ImagePlaceHolder from "../ImagePlaceHolder/ImagePlaceHolder";
import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";
import "./Layout.scss";

type LayoutState = {
  time: Date;
};

const PaymentMethods = [
  {
    name: "Credit card",
    img:
      "https://raw.githubusercontent.com/codacy20/scripts/master/assets/creditcard.svg?token=ABNYBFPLGXY42WXLH4MX53S7LG4LG"
  },
  {
    name: "",
    img:
      "https://raw.githubusercontent.com/codacy20/scripts/master/assets/paypal.png?token=ABNYBFKUHYLDNLUXH7UTITK7LG4YI"
  }
];

export default class Layout extends Component<{}, LayoutState> {
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
      <div className="Layout-container">
        <div className="left">
          <ImagePlaceHolder />
        </div>
        <div className="right">
          <FormHeader PaymentMethods={PaymentMethods} />
          <Form />
        </div>
      </div>
    );
  }
}
