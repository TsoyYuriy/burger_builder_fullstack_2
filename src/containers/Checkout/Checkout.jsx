import React from "react";
import { CheckoutSummary } from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate('form-data')
  }

  return (
    <div>
      <CheckoutSummary 
        onSuccess={onSuccess} 
        onPrevClick={() => navigate('/')}
      />
    </div>
  );
};
