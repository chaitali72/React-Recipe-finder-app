import * as Constant from "./constants";
import "./styles.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeItem from "components/RecipeItem";

function RecipeSlider({ item, heading }) {
  return (
    <div className="recipe-slider">
      <h2>{heading} Recipes</h2>
      <Splide options={Constant.SLIDER_OPTIONS}>
        {item.map((x) => (
          <SplideSlide key={x.idMeal}>
            <RecipeItem {...x} key={x.idMeal} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default RecipeSlider;
