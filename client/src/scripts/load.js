const widgetContext = require.context("/src/widgets/", true, /content\.js$/);

async function loadContent(entry) {
  const module = widgetContext(`./${entry}/content.js`);
  const markup = module.getMarkup();
  const container = document.querySelector("#js-main-container");
  container.insertAdjacentHTML("beforeend", markup);
}

async function loadWidgets(callback) {
  await loadContent("01");
  if (callback && typeof callback === "function") {
    callback();
  }
}

export { loadWidgets };
