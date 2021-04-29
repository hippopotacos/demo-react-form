/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import './Form.css'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <div>
        <label>
            <p>カード番号</p>
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
        </label>
        <label>
          <p>セキュリティコード</p>
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
        </label>
        <label>
          <p>有効期限</p>
          <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
        </label>
    </div>
    
  );
};

export default CardSection;