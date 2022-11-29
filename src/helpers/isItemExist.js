const isItemExist = (favRecipes, id) => favRecipes.find((x) => x.idMeal === id);

export default isItemExist;
