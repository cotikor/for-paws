import React, { useState } from "react";
import StripeCheckout from 'react-stripe-checkout'

export const Donate = (props) => {
    const handleToken = (token, address) => {
        console.log(token, address)
    }
	return (
        console.log(process.env.REACT_APP_STRIPE_KEY),
        <div>
            <StripeCheckout stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={handleToken}
             />
        </div>
	);
};
