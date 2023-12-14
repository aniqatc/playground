const widgetContext = require.context(
  "/client/src/widgets/",
  true,
  /content\.js$/,
);

async function loadContent(entry) {
  const module = widgetContext(`./${entry}/content.js`);
  const markup = module.getMarkup();
  const container = document.querySelector("#js-main-container");
  container.insertAdjacentHTML("beforeend", markup);
}

async function loadWidgets() {
  await loadContent("01");
}

export { loadWidgets };
