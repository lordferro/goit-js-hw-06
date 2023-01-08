const refs = {
  inputFontSize: document.querySelector(
    "#font-size-control"
  ),
  textSpan: document.querySelector("#text"),
};
// Привязали сразу размер шрифта к значению ползунка, что б небыло скачка.
refs.textSpan.style.fontSize = `${refs.inputFontSize.value}px`;

refs.inputFontSize.addEventListener(
  "input",
  onRangeChange
);

function onRangeChange(event) {
  return (refs.textSpan.style.fontSize = `${event.currentTarget.value}px`);
}
