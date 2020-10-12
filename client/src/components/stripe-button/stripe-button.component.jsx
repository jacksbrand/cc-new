import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HUbNPCh4Uw4gYgzxKrMD8hJQjOYDVVg5Qjgf4xNWpfgnWajhCFg2GIWiMWMtnuX20bmS1EZ2rvpnrh7odPiKnCc00C5xSpHme';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert(
          '(TEST) Payment Successful - cart left full for convenience and futher payment testing'
        );
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'Payment process encountered an issue. Please use the provided test credit card details, which can be found on the checkout page, above the payment button.'
        );
      });
  };

  return (
    <StripeCheckout
      currency="GBP"
      label="Pay Now"
      name="CC Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Total: £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
