function getRandomHexColor() {
  return `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(
    ".change-color"
  ),
  spanColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener(
  "click",
  onChangeColorClick
);

function onChangeColorClick(event) {
  const getColor = getRandomHexColor();
  refs.spanColor.textContent = getColor;
  refs.body.style.backgroundColor = getColor;
}
