import "./styles.scss";
import RecipeItem from "components/RecipeItem";
import { removeAllFavorites } from "features/recipe/recipeSlice";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

function FavRecipes() {
  const { favRecipes } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const isFavRecipeExist = favRecipes.length > 0;

  return (
    <div className="fav-recipes">
      <div className="fav-recipes-nav">
        <h2>Your Favorite Recipes</h2>
        {isFavRecipeExist && (
          <button onClick={() => dispatch(removeAllFavorites())}>
            <AiFillDelete /> Delete All
          </button>
        )}
      </div>
      <div className="fav-recipe-items">
        {isFavRecipeExist ? (
          favRecipes.map((item) => <RecipeItem {...item} key={item.idMeal} />)
        ) : (
          <h3>
            There is nothing here! Try adding a few recipes to your favourites.{" "}
          </h3>
        )}
      </div>
    </div>
  );
}

export default FavRecipes;
