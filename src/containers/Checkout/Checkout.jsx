import React from "react";
import { CheckoutSummary } from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { parsParams } from "../../utils/utils.functions";

export const Checkout = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // const {ingredients, totalPrice} = location.state;

  const [searchParams] = useSearchParams();
  const pars = parsParams(searchParams);


  const onSuccess = () => {
    navigate('form-data', {state: {pars}})
  }

  return (
    <div>
      <CheckoutSummary 
        ingredients={pars} 
        onSuccess={onSuccess} 
      />
    </div>
  );
};
