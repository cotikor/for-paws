import React from "react";
import {CardElement} from '@stripe/react-stripe-js'
import { FormSubLabel, FormInputContainer, FormShortInput, FormHeading, FormSubmitButton } from '../../styles/form'
import {DonateContainer, StripeInputContainer} from '../../styles/donate'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

export const DonateComponent = ({setMode, mode}) => {
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const billingDetails = {
    //       name: e.target.name.value,
    //       email: e.target.email.value,
    //       address: {
    //         city: e.target.city.value,
    //         line1: e.target.address.value,
    //         state: e.target.state.value,
    //         postal_code: e.target.zip.value
    //       }
    //     };
    
    //     setProcessingTo(true);
    
    //     const cardElement = elements.getElement("card");
    
    //     try {
    //       const { data: clientSecret } = await axios.post("/api/payment_intents", {
    //         amount: price * 100
    //       });
    
    //       const paymentMethodReq = await stripe.createPaymentMethod({
    //         type: "card",
    //         card: cardElement,
    //         billing_details: billingDetails
    //       });
    
    //       if (paymentMethodReq.error) {
    //         setCheckoutError(paymentMethodReq.error.message);
    //         setProcessingTo(false);
    //         return;
    //       }
    
    //       const { error } = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: paymentMethodReq.paymentMethod.id
    //       });
    
    //       if (error) {
    //         setCheckoutError(error.message);
    //         setProcessingTo(false);
    //         return;
    //       }
    
    //       onSuccessfulCheckout();
    //     } catch (err) {
    //       setCheckoutError(err.message);
    //     }
    //   };
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
    const cardElementOptions = {
        style: {
            base: {
                color: 'white',
                fontSize: '16px',
                iconColor: 'white'
                
            },
            invalid: {
                color: 'red',
                iconColor: 'red'
            },
        },
        hidePostalCode: true,
    }
	return (
        <Elements stripe={stripePromise}>
        <DonateContainer>
            <FormHeading>Donate</FormHeading>
            <FormInputContainer>
            <FormShortInput type='text' required name='amount' placeholder='$10.00'></FormShortInput>
                <FormSubLabel>Amount</FormSubLabel>
                <FormShortInput type='text' required name='name' placeholder='Jane Doe'></FormShortInput>
                <FormSubLabel>Name</FormSubLabel>
                <FormShortInput type='text'  required name='email' placeholder='jdoe@email.com'></FormShortInput>
                <FormSubLabel>Email</FormSubLabel>
                <FormShortInput  type='text' required name='address' placeholder='123 Main St. Apt 2'></FormShortInput>
                <FormSubLabel >Street Address</FormSubLabel>
                <FormShortInput type='text' required name='city' placeholder='Aurora'></FormShortInput>
                <FormSubLabel>City</FormSubLabel>
                <FormShortInput type='text' required name='state' placeholder='Colorado'></FormShortInput>
                <FormSubLabel>State</FormSubLabel>
                <FormShortInput type='text'  required name='zip' placeholder='80015'></FormShortInput>
                <FormSubLabel>Zip Code</FormSubLabel>
                <StripeInputContainer>
                 <CardElement options={cardElementOptions}></CardElement>
                 </StripeInputContainer>
                 <FormSubLabel>Payment Information</FormSubLabel>
            </FormInputContainer>
            <FormSubmitButton onClick={ e=> {setMode('donation')}}>Submit</FormSubmitButton>
        </DonateContainer>
        </Elements>
	);
};
