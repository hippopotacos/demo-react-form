import React, { useState } from "react";
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: document.getElementById("inputCardholderName").value
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setError(event.error ? event.error.message : "");
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        setSucceeded(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <p>カード名義</p>
            <input id="inputCardholderName" type="text" />
        </label>
        <CardSection />
        {/* Show any error that happens when processing the payment */}
        {error && (
            <div className="card-error" role="alert">
                {error}
            </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
            <a
            href={`https://dashboard.stripe.com/test/payments`}
            >
            {" "}
            Stripe dashboard.
            </a> Refresh the page to pay again.
        </p>
        <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}