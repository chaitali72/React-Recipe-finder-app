import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import Alert from "components/Alert";
import { RecipeSearch, getRecipeById, RecipeCategory } from "config/api";
import * as Constant from "constants";

const initialState = {
  chicken: [], // Static state for homepage first slider
  beef: [], // Static state for homepage second slider
  items: [],
  searchQuery: "",
  searchedItems: null,
  listingMode: Constant.LISTING_MODE_DEFAULT,
  recipeDetails: [],
  favRecipes: localStorage.getItem("favRecipes")
    ? JSON.parse(localStorage.getItem("favRecipes"))
    : [],
  filterButtons: null,
  isLoading: true,
};

export const getRecipeItems = createAsyncThunk(
  "recipes/getRecipeItems",
  async (query) => {
    const res = await axios(RecipeSearch(query));

    return {
      data: res.data.meals,
      query,
    };
  }
);

export const getSearchedRecipes = createAsyncThunk(
  "recipes/getSearchedRecipes",
  async (q) => {
    const res = await axios(RecipeSearch(q));
    return res.data.meals;
  }
);

export const getCategoryItems = createAsyncThunk(
  "recipes/getCategoryItems",
  async (query) => {
    const res = await axios(RecipeCategory(query));

    return res.data.meals;
  }
);
export const getRecipeDetails = createAsyncThunk(
  "recipes/getRecipeDetails",
  async (id) => {
    const res = await axios(getRecipeById(id));
    return res.data.meals[0];
  }
);
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterButton: (state, action) => {
      state.filterButtons = action.payload;
    },
    setListingMode: (state, action) => {
      state.listingMode = action.payload;
    },
    addFavorite: (state, action) => {
      const newFav = {
        id: nanoid(),
        idMeal: action.payload.idMeal,
        strMeal: action.payload.strMeal,
        strMealThumb: action.payload.strMealThumb,
      };
      state.favRecipes.push(newFav);
      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
      Alert(
        `${newFav.strMeal} has been added to your favorite recipes!`,
        "success"
      );
    },
    removeFavorite: (state, action) => {
      state.favRecipes = state.favRecipes.filter(
        (x) => x.idMeal !== action.payload
      );
      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));

      Alert("Successfully removed!", "success");
    },
    removeAllFavorites: (state) => {
      state.favRecipes = [];
      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
      Alert("All your favorite recipes have been deleted!", "success");
    },
  },
  extraReducers: {
    // For fetching all recipe items
    [getRecipeItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecipeItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { data, query } = action.payload;
      state[query] = data;
      state.items = data;
    },
    [getRecipeItems.rejected]: (state) => {
      state.isLoading = false;
    },
    //For filtering recipes in a specific category
    [getCategoryItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoryItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getCategoryItems.rejected]: (state) => {
      state.isLoading = false;
    },
    // For fetching single recipe detail
    [getRecipeDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecipeDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recipeDetails = action.payload;
    },
    [getRecipeDetails.rejected]: (state) => {
      state.isLoading = false;
    },
    // For searching recipes on API endpoint.
    [getSearchedRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchedRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchedItems = action.payload;
    },
    [getSearchedRecipes.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  setFilterButton,
  setListingMode,
  removeAllFavorites,
  setSearchQuery,
} = recipeSlice.actions;
export default recipeSlice.reducer;
