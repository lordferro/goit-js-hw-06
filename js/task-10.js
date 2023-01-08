function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumbers: document.querySelector(
    "#controls input"
  ),
  createBtn: document.querySelector(
    "[data-create]"
  ),
  destroyBtn: document.querySelector(
    "[data-destroy]"
  ),
  boxesEl: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener(
  "click",
  onCreateClick
);
refs.destroyBtn.addEventListener(
  "click",
  onDestroyClick
);

function onCreateClick() {
  let markup = "";
  let boxSize = 30;
  const choosenNumber = refs.inputNumbers.value;
 
  if (
    Number(choosenNumber) > 100 ||
    Number(choosenNumber) < 1
  ) {
    refs.inputNumbers.value = null;
    return alert("Please choose number between 1 and 100");
  }
 
  for (
    let i = 1;
    i <= choosenNumber;
    i += 1
  ) {
    const backgroundColor = getRandomHexColor();

    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${backgroundColor};"></div>`;

    boxSize += 10;
  }   
  
  refs.inputNumbers.value = null;
  return refs.boxesEl.insertAdjacentHTML(
    "beforeend",
    markup
  );
}

function onDestroyClick() {
  
  refs.inputNumbers.value = null;
  refs.boxesEl.innerHTML = "";
}
