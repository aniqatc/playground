async function loadContent(entry) {
  const module = await import(
    /* webpackMode: "eager" */ `/src/widgets/${entry}/content.js`
  );
  const markup = module.getMarkup();
  const container = document.querySelector("#js-main-container");
  container.insertAdjacentHTML("beforeend", markup);
}

async function loadScript(entry) {
  try {
    const module = await import(
      /* webpackMode: "eager" */ `/src/widgets/${entry}/script.js`
    );
    if (module && module.initializeScript) {
      module.initializeScript();
    }
  } catch (error) {
    // Skip
  }
}

async function loadWidgets() {
  for (let i = 1; i <= 2; i++) {
    let entry = String(i).padStart(2, "0");
    await loadContent(entry);
    await loadScript(entry);
  }
}

export { loadWidgets };
