const inputEl = document.querySelector(
  "#validation-input"
);
const requiredLength = document.querySelector(
  '[data-length="6"]'
);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {

  if (
    event.currentTarget.value.length ===
    Number(requiredLength.dataset.length)
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}


