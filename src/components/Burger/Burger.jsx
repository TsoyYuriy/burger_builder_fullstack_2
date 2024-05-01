import React from "react";
import { Ingredient } from "./Ingredient/Ingredient";
import "./burger.css";
import { useSelector } from "react-redux";


const Burger = () => {

  const { ingredients } = useSelector(state => state.ingredients)

  const ingredientKeys = Object.keys(ingredients);
  let ingredientsArray = [];

  ingredientKeys.forEach((igKey) => {
    let amount = ingredients[igKey]; // 2 5
    for (let i = 0; i < amount; i++) {
      //                                                      salad
      ingredientsArray.push(<Ingredient key={igKey + i} type={igKey} />);
    }

  });

  if (ingredientsArray.length <= 0) {
    ingredientsArray = <p>Please add ingredients</p>
  }

  return (
    <div className="Burger">
      <Ingredient type={"bread-top"} />
      {ingredientsArray}
      <Ingredient type={"bread-bottom"} />
    </div>
  );
};

export default Burger;
