let counterValue = 0;

const refs = {
  incrementBtn: document.querySelector(
    '#counter button[data-action="increment"]'
  ),
  decrementBtn: document.querySelector(
    '#counter button[data-action="decrement"]'
  ),
  value: document.querySelector("#value"),
};

refs.incrementBtn.addEventListener(
  "click",
  onIncrementClick
);
refs.decrementBtn.addEventListener(
  "click",
  onDecrementClick
);

function onIncrementClick() {
  counterValue += 1;
  return (refs.value.textContent = counterValue);
}
function onDecrementClick() {
  counterValue -= 1;
  return (refs.value.textContent = counterValue);
}
