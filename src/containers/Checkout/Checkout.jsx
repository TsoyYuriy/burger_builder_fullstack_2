import React from "react";
import { CheckoutSummary } from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useLocation, useNavigate } from "react-router-dom";
// import { parsParams } from "../../utils/utils.functions";

export const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {ingredients, totalPrice} = location.state;


  const onSuccess = () => {
    navigate('form-data', {state: {ingredients, totalPrice}})
  }

  return (
    <div>
      <CheckoutSummary 
        ingredients={ingredients} 
        price={totalPrice}
        onSuccess={onSuccess} 
        onPrevClick={() => navigate('/')}
      />
    </div>
  );
};
