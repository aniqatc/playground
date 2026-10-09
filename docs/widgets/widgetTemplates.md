## Widget Templates

**Relevant front end file**: [/client/src/widgets/\_card.js](../../client/src/widgets/_card.js)

Every widget is wrapped in the same card shell, built by the `card()` helper in `_card.js`. A widget's `content.js` only describes what's different about it:

```javascript
import './style.scss';
import { card, docsUrl } from '../_card';

export function getMarkup() {
  return card({
    id: '02', // widget number, also used for the #widget-02 id and the like counter
    title: 'Calculator',
    tags: 'expr-eval · function-plot', // short tech list on the right of the header
    color: { w: '#E5484D', wf: '#C8323A', won: '#FFFFFF' }, // tint, strong fill, text on fill
    span: 4, // width on the 12-column grid at desktop size: 4, 5, 7 or 12
    note: 'Saves history as .png', // optional footer note (hidden on phones)
    docs: docsUrl('02-calculator.md'), // "Build notes" link
    body: `...the widget's own markup...`,
  });
}
```

The helper returns:

- a `<section id="widget-02" class="widget-card ...">` with the color variables set inline
- a header with the number badge, title and tech tags
- `<div class="widget-body content">` holding the widget's markup (the `content` class is kept so existing widget selectors still work)
- a footer with the like button (`data-like-btn="02"`), the like count (`data-like-count="02"`), the optional note and the "Build notes" link

Optional extras: `footerExtra` adds markup to the footer (the lottery widget uses it for its Reset button) and `bodyAttrs` adds attributes to the body element (the lottery widget uses it for `data-game`).

### v1

v1 used two copy-and-paste HTML templates instead:

- `_card.html` held the general card markup with the like button, Tailwind styling, and the class/id naming convention
- `_border.html` held a rotating border animation, only used on the About widget

Both were removed in v2 in favour of `_card.js`, so a change to the card shell now happens in one place instead of eight.
