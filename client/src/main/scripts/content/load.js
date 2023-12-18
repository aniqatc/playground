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
  console.log(`Got the content! ${entry}`);
}

function loadScript(entry) {
  try {
    const module = widgetScriptContext(`./${entry}/script.js`);
    if (module && module.initializeScript) {
      module.initializeScript();
      console.log(`Initialized scripts! ${entry}`);
    }
  } catch (error) {
    // Skip
    console.log(entry);
    console.log(error);
  }
}

function loadWidgets() {
  for (let i = 1; i <= 2; i++) {
    let entry = String(i).padStart(2, "0");
    console.log(`loading ${entry}`);
    loadContent(entry);
    loadScript(entry);
  }
}

loadWidgets();
