import React, { useState } from "react";
import "./main-page.css";
import Burger from "../../components/Burger/Burger";
import { Controls } from "../../components/Controls/Controls";
import { ING_PRICE } from "../../utils.constants";


export const MainPage = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(100);

  const addIngHandler = (type) => {
    const oldCount = ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngrs = {...ingredients}
    updateIngrs[type] = updateCount;
    setIngredients(updateIngrs);

    const priceAdded = ING_PRICE[type]; // 50 || 100
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAdded;
    setTotalPrice(newPrice);
  }

  const removeIngHandler = (type) => {
    const oldCount = ingredients[type];

    if(oldCount <= 0 ) return;

    const updateCount = oldCount - 1;
    const updateIngrs = {...ingredients}
    updateIngrs[type] = updateCount;
    setIngredients(updateIngrs);

    const priceAdded = ING_PRICE[type]; // 50 || 100
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceAdded;
    setTotalPrice(newPrice);
  }

  return (
    <>
      <Burger ingredients={ingredients}/>
      
      <Controls 
        totalPrice={totalPrice}
        ingredAdded={addIngHandler}
        ingredRemoved={removeIngHandler}
      />
    </>
  );
};
