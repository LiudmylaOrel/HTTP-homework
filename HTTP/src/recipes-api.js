export const fetchDinnerRecipes = () => {
  return fetch(
    "https://dummyjson.com/recipes/meal-type/Dinner?limit=6&sortBy=name&order=asc",
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Http Error! Status: ${response.status} `);
    }
    return response.json();
  });
};
