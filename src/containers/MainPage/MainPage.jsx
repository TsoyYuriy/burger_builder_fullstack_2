import React, { useEffect, useState } from "react";
import "./main-page.css";
import Burger from "../../components/Burger/Burger";
import { Controls } from "../../components/Controls/Controls";
import { ING_PRICE } from "../../utils/utils.constants";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addIngredients, removeIngredients, updatePurchase } from "../../store/ingredSlice";

export const MainPage = () => {

  // мои глобальный стейт
  const { ingredients, totalPrice, purchasable } = useSelector(state => state.ingredients) 

  // позволяет работать с actions
  const dispatch = useDispatch() 

  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();

  const addIngHandler = (type) => {
    // вызываю dispatch передаю в него addIngredients из redusers
    dispatch( addIngredients(type) )  
    dispatch(updatePurchase())
  };

  const removeIngHandler = (type) => {
    dispatch( removeIngredients(type) )
    dispatch(updatePurchase())
  };

  const closeModalHandler = () => setIsShowModal(false);

  const purchaseContinueHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Burger />

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
