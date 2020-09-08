import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import "../CheckoutForm/CheckoutForm.scss";
export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    window
      .fetch("https://s1up7.sse.codesandbox.io/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Montserrat",
        fontSize: "20px",
        "::placeholder": {}
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    },
    hidePostalCode: true
  };
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={cardStyle}
          id="cardNumber"
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", handleChange(event));
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <div className="input-container">
        <div className="small-input-container">
          <label>Expiration date</label>
          <CardExpiryElement
            options={cardStyle}
            id="cardExpiry"
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", handleChange(event));
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </div>
        <div className="small-input-container">
          <label>CVC</label>
          <CardCvcElement
            options={cardStyle}
            id="cardCvc"
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", handleChange(event));
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </div>
      </div>
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Join Now"
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
