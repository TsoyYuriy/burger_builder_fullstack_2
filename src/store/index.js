import { configureStore } from "@reduxjs/toolkit";
import ingredSlice from "./ingredSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredSlice
  }
})