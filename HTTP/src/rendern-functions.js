const recipeList = document.querySelector(".recipe-list");
const errorText = document.querySelector(".error");

export const renderRecipes = (recipes) => {
  const markup = recipes
    .map(
      (recipe) =>
        `<li><b>${recipe.name}</b> — ${recipe.cuisine}, ${recipe.difficulty}</li>`,
    )
    .join("");
  recipeList.insertAdjacentHTML("beforeend", markup);
};

export const showErrorText = () => {
  errorText.textContent = "Could not load recipes. Try again later.";
};
