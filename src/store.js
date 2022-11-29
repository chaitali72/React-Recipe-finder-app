import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "features/recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
});
