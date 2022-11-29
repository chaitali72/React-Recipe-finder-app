import "./styles.scss";
import RecipeItem from "components/RecipeItem";
import RecipeSlider from "components/RecipeSlider";
import Spinner from "components/Spinner";
import * as Constant from "constants";
import { getRecipeItems } from "features/recipe/recipeSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function RecipeList() {
  const {
    chicken,
    beef,
    isLoading,
    items,
    searchedItems,
    listingMode,
    filterButtons,
  } = useSelector((state) => state.recipe);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeItems("chicken"));
    dispatch(getRecipeItems("beef"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes">
      {listingMode === Constant.LISTING_MODE_FILTER ? (
        <>
          <h2 className="filter-heading">Filtered: {filterButtons} Recipes</h2>
          <div className="filtered-recipes">
            {items?.map((rItem) => (
              <RecipeItem {...rItem} key={rItem.idMeal} />
            ))}
          </div>
        </>
      ) : listingMode === Constant.LISTING_MODE_SEARCH ? (
        <div className="searched-recipes">
          {searchedItems ? (
            searchedItems.map((rItem) => (
              <RecipeItem {...rItem} key={rItem.idMeal} />
            ))
          ) : (
            <h2>Not found! Try to search something else...</h2>
          )}
        </div>
      ) : (
        // Default Home Listing
        <div className="home-recipes">
          <RecipeSlider item={chicken} heading="Chicken" key={chicken.idMeal} />
          <RecipeSlider item={beef} heading="Beef" key={beef.idMeal} />
        </div>
      )}
    </div>
  );
}

export default RecipeList;
