import "./styles.scss";
import Spinner from "components/Spinner";
import {
  getRecipeDetails,
  addFavorite,
  removeFavorite,
} from "features/recipe/recipeSlice";
import isItemExist from "helpers/isItemExist";
import React, { useEffect, useMemo } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleRecipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetails, isLoading, favRecipes } = useSelector(
    (state) => state.recipe
  );

  const itemExist = useMemo(() => isItemExist(favRecipes, id), [favRecipes]);

  let ingredients = [];
  const getIngredients = () => {
    for (let item in recipeDetails) {
      if (
        item.startsWith("strIngredient") &&
        recipeDetails[item] !== "" &&
        recipeDetails[item] !== null // need to check null also, because endpoint has both "" and null values
      ) {
        ingredients.push(recipeDetails[item]);
      }
    }
  };

  getIngredients();

  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="single-recipe">
      <div className="recipe-heading">
        <div className="recipe-info">
          {!itemExist ? (
            <button onClick={() => dispatch(addFavorite(recipeDetails))}>
              <MdFavoriteBorder size={60} />
            </button>
          ) : (
            <button onClick={() => dispatch(removeFavorite(id))}>
              <MdFavorite size={60} />
            </button>
          )}
          <h2>{recipeDetails?.strMeal}</h2>
        </div>

        <img src={recipeDetails?.strMealThumb} alt={recipeDetails?.strMeal} />
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>{recipeDetails?.strInstructions}</p>
      </div>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleRecipe;
