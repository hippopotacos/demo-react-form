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

const CardSection = props => {
  
  const handleChange = async (event) => {
    // CardElement の変更を確認する
    // 顧客がカードの詳細を入力する際にエラーを表示する
    props.setDisabled(event.empty);
    props.setError(event.error ? event.error.message : "");
  };

  return (
    <div>
      <label>
        <p>カード番号</p>
        <CardNumberElement options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
      </label>
      <label>
        <p>セキュリティコード</p>
          <CardCvcElement options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
      </label>
      <label>
        <p>有効期限</p>
        <CardExpiryElement options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
      </label>
      {props.error && <p>カード情報を正しく入力してください</p>}
    </div>
    
  );
};

export default CardSection;