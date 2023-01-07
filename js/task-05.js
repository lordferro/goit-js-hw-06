const refs = {
  nameInputEl: document.querySelector(
    "#name-input"
  ),
  nameOutputSpanEl: document.querySelector(
    "#name-output"
  ),
};

refs.nameInputEl.addEventListener(
  "input",
  onNameInputChange
);

function onNameInputChange(event) {
  if (event.currentTarget.value === "") {
    refs.nameOutputSpanEl.textContent =
      "Anonymous";
  } else {
    refs.nameOutputSpanEl.textContent =
      event.currentTarget.value;
  }
}
