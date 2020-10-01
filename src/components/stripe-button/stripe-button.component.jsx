import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HUbNPCh4Uw4gYgzxKrMD8hJQjOYDVVg5Qjgf4xNWpfgnWajhCFg2GIWiMWMtnuX20bmS1EZ2rvpnrh7odPiKnCc00C5xSpHme';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      currency='GBP'
      label='Pay Now'
      name='CC Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
