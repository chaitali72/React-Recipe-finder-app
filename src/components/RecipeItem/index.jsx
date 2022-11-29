import "./styles.scss";
import { addFavorite, removeFavorite } from "features/recipe/recipeSlice";
import isItemExist from "helpers/isItemExist";
import { useMemo } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecipeItem({ idMeal, strMealThumb, strMeal }) {
  const { favRecipes } = useSelector((state) => state.recipe);

  const itemExist = useMemo(
    () => isItemExist(favRecipes, idMeal),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favRecipes]
  );
  const dispatch = useDispatch();
  const currentItem = {
    idMeal,
    strMealThumb,
    strMeal,
  };
  return (
    <div className="recipe-item">
      <Link to={`/recipe/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} />
        <small>{strMeal}</small>
      </Link>

      {!itemExist ? (
        <button onClick={() => dispatch(addFavorite(currentItem))}>
          <MdFavoriteBorder size={60} />
        </button>
      ) : (
        <button onClick={() => dispatch(removeFavorite(idMeal))}>
          <MdFavorite size={60} />
        </button>
      )}
    </div>
  );
}

export default RecipeItem;
