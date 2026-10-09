## Styling choices for webpage and widgets

**Relevant files**: [/client/src/main/styles/main.css](../../client/src/main/styles/main.css), [/client/src/widgets/\_card.js](../../client/src/widgets/_card.js) and [/client/src/widgets/\*](../../client/src/widgets/)

The overall webpage (header, hero, widget index, grid and footer) is built with Tailwind utility classes in the main `index.html` file. The individual widgets use SCSS, in a `style.scss` file inside each widget's folder.

**Here are some key points**:

- Tailwind is used for the overall webpage styling and layout as it makes it easy to adjust the styling directly in the markup and keeps it separate from the individual widget styling which is declared in its own dedicated SCSS file
- SCSS is used specifically to encapsulate and modularize the individual widget styling because of SCSS' nesting abilities. This allows me to nest classes under a single ID or class that is specific to the widget and ensure that the styles won't conflict with other widget styling. If it wasn't for this capability, I would have to create unique class names that could get very long and hard-to-read and manage (e.g. `.widget-03-header-title_icon` vs `#widget-03` and nesting all the styling under it)

Basically, anything relating to the overall webpage or layout is edited inside the main `html` file and the individual widgets are edited in its respective SCSS file.

### Design tokens (v2)

In v2, every color comes from a small set of CSS custom properties defined at the top of `main.css`:

| Token | Used for |
| --- | --- |
| `--bg` | page background (with a faint dot grid) |
| `--card` | card and input surfaces |
| `--ink` / `--muted` | main text / secondary text |
| `--line` | borders and dividers |
| `--soft` / `--soft2` | subtle fills (inputs, keys, tiles) |
| `--accent` / `--on-accent` | primary buttons and the text on them |
| `--up` / `--down` | positive / negative values (stocks, errors) |
| `--hi` / `--med` / `--lo` | task priority colors |

Light values live on `:root` and dark values on `.dark` (the class the theme button toggles on `<html>`), so nothing in the widgets needs a separate dark-mode block anymore. Tailwind reads the same variables (see `tailwind.config.js`), so `bg-card` or `text-muted` in the HTML follow the theme too.

### Widget colors

Each widget card sets three variables on itself through the shared [`card()` helper](../widgets/widgetTemplates.md):

- `--w` the widget's tint (card background, header, borders)
- `--wf` a stronger fill (number badge, primary button, like heart)
- `--won` the text color that sits on `--wf`

Inside a card, `--line`, `--soft`, `--soft2` and `--accent` are re-mixed from `--w` with `color-mix()`, so a widget's SCSS can just use `var(--soft)` or `var(--accent)` and automatically gets its own tinted version in both themes.

### Motion

Cards fade up as they scroll into view (using `animation-timeline: view()` where supported, with a staggered fade-in as the fallback), likes pop with a "+1", toggles slide and expanding sections grow open. Everything is turned off for visitors who have "reduce motion" enabled (`prefers-reduced-motion`).

### v1

The first version used a `_var.scss` file with a hand-picked set of colors per widget (e.g. `$color-light-red`, `$color-dark-red`) and a separate `.dark #widget-0X { ... }` block in every widget for dark mode. v2 replaced that file with the tokens above. See the [v1 design section of the README](../../README.md#v1-design) for screenshots.
