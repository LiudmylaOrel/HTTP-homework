/*
 * Сайт рецептів показує страви на вечерю: по кліку треба отримати з сервера 6 рецептів
 * за абеткою і показати їх списком, а якщо запит не вдасться — повідомлення про помилку.
 * 1. Оголоси стрілочну функцію fetchDinnerRecipes. Вона робить запит через fetch
 *    за адресою https://dummyjson.com/recipes/meal-type/Dinner з параметрами
 *    limit — 6, sortBy — name, order — asc, перевіряє response.ok
 *    і повертає проміс із даними відповіді.
 * 2. Оголоси стрілочну функцію renderRecipes з параметром recipes. Вона збирає
 *    для кожного рецепта елемент <li> з розміткою "<b>NAME</b> — CUISINE, DIFFICULTY"
 *    і додає її в кінець списку .recipe-list.
 * 3. Додай кнопці .load-btn обробник кліка: виклич fetchDinnerRecipes, а потім передай
 *    у renderRecipes масив recipes із відповіді.
 * 4. У catch запиши в елемент .error текст "Could not load recipes. Try again later."
 * 5. Заміни в адресі recipes на recipez і натисни кнопку ще раз: на сторінці
 *    має зʼявитися повідомлення про помилку. Потім поверни правильну адресу.
 */
import { fetchDinnerRecipes } from "./recipes-api";
import { renderRecipes, showErrorText } from "./rendern-functions";
const loadBtn = document.querySelector(".load-btn");

loadBtn.addEventListener("click", () => {
  fetchDinnerRecipes()
    .then(({ recipes }) => renderRecipes(recipes))
    .catch(() => showErrorText);
});
