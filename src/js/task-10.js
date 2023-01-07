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

  for (
    let i = 1;
    i <= refs.inputNumbers.value;
    i += 1
  ) {
    const backgroundColor = getRandomHexColor();

    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${backgroundColor};"></div>`;

    boxSize += 10;
  }

  return refs.boxesEl.insertAdjacentHTML(
    "afterbegin",
    markup
  );
}

function onDestroyClick() {
  return (refs.boxesEl.innerHTML = "");
}
