import "./styles.scss";
import * as Constant from "constants";
import { setListingMode, setSearchQuery } from "features/recipe/recipeSlice";
import React from "react";
import { GiHamburger } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Logo() {
  const dispatch = useDispatch();

  return (
    <div className="logo">
      <Link
        to="/"
        onClick={() => {
          //dispatch(setFilterButton(null));
          dispatch(setListingMode(Constant.LISTING_MODE_DEFAULT));
          dispatch(setSearchQuery("")); // Clearing search input
        }}
      >
        <GiHamburger size="40" /> Recipe<b>APP</b>
      </Link>
    </div>
  );
}

export default Logo;
