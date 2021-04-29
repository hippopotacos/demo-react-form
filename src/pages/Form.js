import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51IlS2lCVw1I3BwlSOki8NXpTNUNP5xX6EtwLBaHjc9NnWRc2TP0jXy40gfALXXzQElBJKYOt8DUY5NRWvHUOvCWF00aSb6NMZ1");

export default function App() {
  return (
    <div className="App">
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </div>
  );
}