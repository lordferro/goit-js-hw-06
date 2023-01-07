const inputEl = document.querySelector(
  "#validation-input"
);
const requiredLength = document.querySelector(
  '[data-length="6"]'
);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ==
    requiredLength.dataset.length
  ) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
