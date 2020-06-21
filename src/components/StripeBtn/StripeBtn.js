import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publichKey =
    "pk_test_51GwXoMEZrSY5FpYtj968ck9e3PdPhVTJXecCUssYFAt86MXopl9BMul1O0ObwPmMMW4cExOioFZUTHtgVqTL091j00nX4f9VQh";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now!"
      name="Shahin's E-Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now!"
      token={onToken}
      stripeKey={publichKey}
    />
  );
};

export default StripeBtn;
