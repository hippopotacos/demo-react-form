import React, { useState, useEffect } from "react";
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // ページが読み込まれると同時にPaymentIntentを作成する
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  // 購入ボタンを押したら実行
  const handleSubmit = async (event) => {
    // デフォルトのフォーム送信をさせない
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.jsがロードされるまで、フォームの送信を禁止する
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: document.getElementById("inputCardholderName").value
        },
      }
    });

    if (result.error) {
      // お客様にエラーを表示する（例：資金不足
      console.log(result.error.message);
      setError(`お支払いが失敗しました： ${result.error.message}`);
      setProcessing(false);
    } else {
      // 支払いが処理されたら
      if (result.paymentIntent.status === 'succeeded') {
        // お客様に成功メッセージを表示する
        // コールバック実行前にお客様がウィンドウを閉じてしまう危険性があります。
        // webhookやプラグインを設定してpayment_intent.succeededイベントをリッスンするウェブフックまたはプラグインを設定します。
        // 決済後のアクションを処理します。 
        setError(null);
        setProcessing(false);
        setSucceeded(true);

        // 決済ページへのリダイレクトが必要(?)
        // window.location.href="https://www.google.com";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <p>カード名義</p>
          <input id="inputCardholderName" type="text" />
        </label>
        <CardSection
          error={error}
          setError={setError}
          setDisabled={setDisabled}
        />
        <label>
          <input type="checkbox" />
          <p>check</p>
        </label>
      </div>
      {/* 決済処理時に発生したエラーを表示 */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* 完了時に成功メッセージを表示（テスト用） */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
        href={`https://dashboard.stripe.com/test/payments`}
        >
        {" "}
        Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
      {/* 送信するボタン */}
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "送信する"
          )}
        </span>
      </button>
    </form>
  );
}