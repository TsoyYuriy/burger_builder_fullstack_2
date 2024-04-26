import React, { useState } from "react";
import "./main-page.css";
import Burger from "../../components/Burger/Burger";
import { Controls } from "../../components/Controls/Controls";
import { ING_PRICE } from "../../utils/utils.constants";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import { createSearchParams, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(100);
  const [purchasable, setPurchasable] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();

  const updatePurchase = (updateIngrs) => {
    const sum = Object.keys(updateIngrs)
      .map((igKey) => updateIngrs[igKey])
      .reduce((sum, el) => sum + el, 0);

    setPurchasable(sum > 0);
  };

  const addIngHandler = (type) => {
    const oldCount = ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngrs = { ...ingredients };
    updateIngrs[type] = updateCount;
    setIngredients(updateIngrs);

    const priceAdded = ING_PRICE[type]; // 50 || 100
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAdded;
    setTotalPrice(newPrice);

    updatePurchase(updateIngrs);
  };

  const removeIngHandler = (type) => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) return;

    const updateCount = oldCount - 1;
    const updateIngrs = { ...ingredients };
    updateIngrs[type] = updateCount;
    setIngredients(updateIngrs);

    const priceAdded = ING_PRICE[type]; // 50 || 100
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceAdded;
    setTotalPrice(newPrice);

    updatePurchase(updateIngrs);
  };

  const closeModalHandler = () => setIsShowModal(false);

  const purchaseContinueHandler = () => {
    //   navigate('/checkout', {state: {ingredients, totalPrice}});

    const params = new createSearchParams(ingredients);

    navigate({
      pathname: "/checkout",
      search: params.toString(),
    });
  };

  return (
    <>
      <Burger ingredients={ingredients} />

      <Controls
        totalPrice={totalPrice}
        ingredAdded={addIngHandler}
        ingredRemoved={removeIngHandler}
        purchasable={purchasable}
        onClickShowModal={() => setIsShowModal(true)}
      />

      <Modal show={isShowModal} closed={closeModalHandler}>
        <OrderSummary
          ingred={ingredients}
          price={totalPrice}
          onCloseModal={closeModalHandler}
          onContinue={purchaseContinueHandler}
        />
      </Modal>
    </>
  );
};
