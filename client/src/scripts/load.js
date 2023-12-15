const widgetContext = require.context("/src/widgets/", true, /content\.js$/);

function loadContent(entry) {
  const module = widgetContext(`./${entry}/content.js`);
  const markup = module.getMarkup();
  const container = document.querySelector("#js-main-container");
  container.insertAdjacentHTML("beforeend", markup);
}

function loadWidgets() {
  for (let i = 1; i < 2; i++) {
    let entry = String(i).padStart(2, "0");
    loadContent(entry);
  }
}

export { loadWidgets };
