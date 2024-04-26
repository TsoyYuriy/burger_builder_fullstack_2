import React from "react";
import { CheckoutSummary } from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useLocation, useNavigate } from "react-router-dom";

export const Checkout = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {ingredients, totalPrice} = location.state;

  console.log(location);
  
  const onSuccess = () => {
    navigate('form-data', {state: {ingredients, totalPrice}})
  }

  return (
    <div>
      <CheckoutSummary 
        ingredients={ingredients} 
        onSuccess={onSuccess} 
        price={totalPrice}
      />
    </div>
  );
};
