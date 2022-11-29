import "./styles.scss";
// import about from "assets/about.png";
import foodlogo from "../../assets/foodlogo.jpeg"
function About() {
  return (
    <div className="about">
      <img src={foodlogo} alt="about" />
      <h2>
         Good Eats RecipeAPP is an application where you can browse hundreds of recipes and
        add the ones you like to your favorites.{" "}
      </h2>
      <p>
        Just click on it to see the ingredients and instructions for the recipe.
       
      </p>
    </div>
  );
}

export default About;
