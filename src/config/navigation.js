import About from "pages/About";
import FavRecipes from "pages/FavRecipes";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SingleRecipe from "pages/SingleRecipe";

const navigationBar = {
  routes: [
    { path: "/", element: Home },
    { path: "/about", element: About },
    { path: "/favorites", element: FavRecipes },
    { path: "/recipe/:id", element: SingleRecipe },
    { path: "*", element: NotFound },
  ],
};

export default navigationBar;
