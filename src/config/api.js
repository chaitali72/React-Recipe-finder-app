const apiUrl = "https://www.themealdb.com/api/json/v1/1/";

export const RecipeSearch = (q) => {
  const queryUrl = `${apiUrl}search.php?s=${q}`;
  return queryUrl;
};

export const RecipeCategory = (q) => {
  const queryUrl = `${apiUrl}filter.php?c=${q}`;
  return queryUrl;
};

export const getRecipeById = (id) => {
  const queryUrl = `${apiUrl}lookup.php?i=${id}`;
  return queryUrl;
};
