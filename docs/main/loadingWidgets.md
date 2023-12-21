## Loading Widgets into DOM

**Relevant file**: [/client/src/main/scripts/content/load.js](../../client/src/main/scripts/content/load.js)

I opted to load the individual widget files similarly to how I load my individual CSS creations in my <a href="https://github.com/aniqatc/css-100">100 Days of CSS project</a>. Each individual day or "entry" has its own dedicated folder with a JavaScript module called `content.js`, the styling in a dedicated `style.css/scss` file and an optional `script.js` file. My widgets in this project follow the same convention.

**Here are some key points**:

To dynamically load JS modules, I use the Webpack feature, `require.context()` to create a context of where the files reside:

```javascript
const widgetMarkupContext = require.context('/src/widgets/', true, /content\.js$/);
const widgetScriptContext = require.context('/src/widgets/', true, /script\.js$/);
```

These contexts are used in two functions:

- `widgetMarkupContext` is used in `loadContent()` to dynamically execute the `getMarkup()` function which returns a string of HTML markup which is then inserted into the main `index.html` file using `insertAdjacentHTML()`
- `widgetScriptContext` is used in `loadScript()` which first checks if the module exists (as some widgets might not need additional JS functionalities meaning no extra `script.js` file) and then, checks for the existence of the initialization function - if these are both true, the function will execute the initialization function

Both of these functions are called using a loop based on the number of widgets:

```javascript
function loadWidgets() {
	for (let i = 1; i <= 10; i++) {
		let entry = String(i).padStart(2, '0');
		loadContent(entry);
		loadScript(entry);
	}
}
```
