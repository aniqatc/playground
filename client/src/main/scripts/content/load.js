const widgetMarkupContext = require.context('/src/widgets/', true, /content\.js$/);
const widgetScriptContext = require.context('/src/widgets/', true, /script\.js$/);
const container = document.querySelector('#js-main-container');

function loadContent(entry) {
  const module = widgetMarkupContext(`./${entry}/content.js`);
  const markup = module.getMarkup();
  container.insertAdjacentHTML('beforeend', markup);
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
  container.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
    const entry = String(i).padStart(2, '0');
    loadContent(entry);
    loadScript(entry);
  }
}

export { loadWidgets };
