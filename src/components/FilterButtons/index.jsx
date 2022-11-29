import "./styles.scss";
import * as Constant from "constants";
import {
  getCategoryItems,
  setFilterButton,
  setListingMode,
  setSearchQuery,
} from "features/recipe/recipeSlice";
import { GiPlantSeed, GiWrappedSweet, GiFishing } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { useDispatch } from "react-redux";

function FilterButtons() {
  const dispatch = useDispatch();

  const onClickHandler = (type) => {
    dispatch(setListingMode(Constant.LISTING_MODE_FILTER));
    dispatch(getCategoryItems(type));
    dispatch(setFilterButton(type));
    dispatch(setSearchQuery("")); // Clearing search input
  };
  return (
    <div className="filter-buttons">
      <button onClick={() => onClickHandler("Vegetarian")}>
        <GiPlantSeed /> Vegetarian
      </button>
      <button onClick={() => onClickHandler("Breakfast")}>
        <MdFreeBreakfast /> Breakfast
      </button>
      <button onClick={() => onClickHandler("Dessert")}>
        <GiWrappedSweet /> Dessert
      </button>
      <button onClick={() => onClickHandler("Seafood")}>
        <GiFishing /> Seafood
      </button>
    </div>
  );
}

export default FilterButtons;
