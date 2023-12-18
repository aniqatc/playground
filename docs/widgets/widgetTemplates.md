## Widget Templates

**Relevant file**: `/client/src/widgets/_border.html` and `/client/src/widgets/_card.html`

At the root of the `/widgets` folder, there are two templates:

- `_card.html` holds the general card markup with the like button, Tailwind styling, and class/id naming convention to use. This file is simply used to copy-and-paste the markup to use inside the `content.js`'s `getMarkup()` function which returns a widget's individual HTML markup
- `_border.html` holds a resuable and responsive rotating border animation for the widget cards. It's currently only being used for the 'about' widget card but I wanted to keep it in its own file just in case I wanted to reuse it for another card that needs emphasizing
