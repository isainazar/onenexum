import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useState } from "react";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}



const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handlePayment = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        console.log(paymentMethod)
        const { id } = paymentMethod;
        
        console.log(id);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error);
    }

  };

  
  return (
   <>
      {!success? (
          <form onSubmit={handlePayment}>
           <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
          <button>Submit</button>
        </form>
      ): null }


   </>
  
  );
};

export default PaymentForm;
