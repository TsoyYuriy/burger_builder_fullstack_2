import { createSlice } from "@reduxjs/toolkit";
import { ING_PRICE } from "../utils/utils.constants";


const name = 'ingredients';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 100,
  purchasable: false 
}

const ingredSlice = createSlice({
  name,
  initialState,
  reducers: {
    addIngredients(state, action) {
      state.ingredients = {
        ...state.ingredients,
        [action.payload]: state.ingredients[action.payload] + 1 || 0
      }

      state.totalPrice += ING_PRICE[action.payload];
    },

    removeIngredients(state, action) {
      if (state.ingredients[action.payload] <= 0) return;

      state.ingredients = {
        ...state.ingredients,
        [action.payload]: state.ingredients[action.payload] - 1 || 0
      }

      state.totalPrice -= ING_PRICE[action.payload];
    },

    updatePurchase (state) {
      const sum = Object.keys(state.ingredients)
        .map((igKey) => state.ingredients[igKey])
        .reduce((sum, el) => sum + el, 0);
      state.purchasable = sum > 0;
    }
  }
})

export const { addIngredients, removeIngredients, updatePurchase } = ingredSlice.actions;

export default ingredSlice.reducer;