import "./styles.scss";
// import about from "assets/about.png";

function About() {
  return (
    <div className="about">
      {/* <img src={about} alt="about" /> */}
      <h2>
        RecipeAPP is an application where you can browse hundreds of recipes and
        add the ones you like to your favorites.{" "}
      </h2>
      <p>
        Just click on it to see the ingredients and instructions for the recipe.
        We wish you a day full of food!
      </p>
    </div>
  );
}

export default About;
