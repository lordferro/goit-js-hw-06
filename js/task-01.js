//Link for all item by class selector
const allItemsInCategories =
  document.querySelectorAll(".item");

  console.log(allItemsInCategories);

console.log(
  "Number of categories:",
  allItemsInCategories.length
);

allItemsInCategories.forEach((item) => {
  //console h2
  console.log(item.firstElementChild.innerHTML);

  //console number of elements
  console.log(
    "Elements:",
    item.lastElementChild.children.length
  );
});
