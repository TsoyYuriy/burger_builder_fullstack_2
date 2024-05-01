import React, { useState } from "react";
import "./contact-data.css";
import { inputForm } from "../../../utils/utils.constants";
import { useSelector } from "react-redux";

export const ContactData = () => {

  const {ingredients, totalPrice} = useSelector(state => state.ingredients)
  
  const [order, setOrder] = useState({
    'user-name': "",
    email: "",
    street: "",
    postal: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setOrder( prevState => {
      return {...prevState, [name]: value}
    } )
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const customer = {
      ingredients,
      order,
      totalPrice
    }

    console.log(customer);
  }

  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      <form onSubmit={onSubmit}>

        {inputForm.map((input) => {
          return (
            <input
              key={input.name}
              className="Input"
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              onChange={onChangeHandle}
            />
          );
        })}

        <button className="Success">Order</button>
      </form>
    </div>
  );
};
