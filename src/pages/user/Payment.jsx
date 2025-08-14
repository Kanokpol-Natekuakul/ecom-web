import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { payment } from '../../api/stripe';
import useEcomStore from '../../store/econ-store';
import CheckoutForm from '../../components/CheckOutForm';

const stripePromise = loadStripe("pk_test_51RvJlxLKCLGMJwEhdYyBkDbgOpAlGZVdhaMHEm3GuXMRVY0wN4shtBrncYEB6Liz2Yuwp3v3DDT2SDm6b409j2PY00dojrQptz");

const Payment = () => {
  const token = useEcomStore((s)=>s.token)
  const [clientSecret,setClientSecret] = useState("")

  useEffect(()=>{
    payment(token)
    .then((res) => {
        console.log(res);
        setClientSecret(res.data.clientSecret);
      })
    .catch((err) => {
        console.log(err);
      });
  },[])

    const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  return (
    <div>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance, loader }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment