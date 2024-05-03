import React, { useState } from "react";
import "./contact-data.css";
import { inputForm } from "../../../utils/utils.constants";
import { useDispatch, useSelector } from "react-redux";
import { push, ref, set } from "firebase/database";
import { db } from "../../../config/firebase.config";
import { useNavigate } from "react-router-dom";

export const ContactData = () => {

  const navigate = useNavigate()
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

    const data = ref(db, 'orders')

    const newOrder = push( data );

    set(newOrder , customer)
      .then(() => {
        alert('Data saved') 
        navigate('/');
      })
      .catch( err => console.error(err))

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
