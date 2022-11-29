import "./styles.scss";
import FilterButtons from "components/FilterButtons";
import RecipeList from "components/RecipeList";
import Search from "components/Search";

function Home() {
  return (
    <div className="home-container">
      <Search />
      <FilterButtons />
      <RecipeList />
    </div>
  );
}

export default Home;
