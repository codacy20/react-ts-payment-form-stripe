import { CardElement } from "@stripe/react-stripe-js";
import React, { Component } from "react";

export default class CheckoutForm extends Component<{ stripe; elements }, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: this.props.elements.getElement(CardElement)
    });
  };

  render() {
    const { stripe } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}
