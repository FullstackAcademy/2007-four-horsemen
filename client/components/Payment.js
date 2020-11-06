import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'pk_test_TYooMQauvdEDq54NiTphI7jx';


const CURRENCY = 'USD';

const fromEuroToCent = (amount) => amount * 100;

const errorPayment = (data) => {
  alert('Payment Error');
};

const onToken = (amount, description, successPayment) => (token) =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount),
    })
    .then(successPayment)
    .catch(errorPayment);

const Payment = ({ name, description, amount, successPayment }) => (
  <StripeCheckout
    bitcoin
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description, successPayment)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Payment;
