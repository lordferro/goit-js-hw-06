const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refIngredients = document.querySelector(
  "#ingredients"
);

//function to create array of items with text and class
const makeIngredientsLi = (ingredients) => {
  return ingredients.map((ingredient) => {
    //create an element
    const liEl = document.createElement("li");
    //add class
    liEl.classList.add("item");
    //add text
    liEl.textContent = ingredient;
    return liEl;
  });
};
//call function
const items = makeIngredientsLi(ingredients);
//addition of elements using spread operator
refIngredients.append(...items);
