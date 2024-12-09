const widgetMarkupContext = require.context(
  "/src/widgets/",
  true,
  /content\.js$/,
);
const widgetScriptContext = require.context(
  "/src/widgets/",
  true,
  /script\.js$/,
);

function loadContent(entry) {
  const module = widgetMarkupContext(`./${entry}/content.js`);
  const markup = module.getMarkup();
  const container = document.querySelector("#js-main-container");
  container.insertAdjacentHTML("beforeend", markup);
}

function loadScript(entry) {
  try {
    const module = widgetScriptContext(`./${entry}/script.js`);
    if (module && module.initializeScript) {
      module.initializeScript();
    }
  } catch (error) {
    // skip
  }
}

function loadWidgets() {
  for (let i = 1; i <= 8; i++) {
    let entry = String(i).padStart(2, "0");
    loadContent(entry);
    loadScript(entry);
  }
}

export { loadWidgets };
