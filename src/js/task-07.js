const refs = {
  inputFontSize: document.querySelector(
    "#font-size-control"
  ),
  textSpan: document.querySelector("#text"),
};

refs.inputFontSize.addEventListener(
  "input",
  onRangeChange
);

function onRangeChange(event) {
  return (refs.textSpan.style.fontSize = `${event.currentTarget.value}px`);
}
