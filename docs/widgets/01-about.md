## 01 · About

A full-width card describing the purpose of the playground, the tech stack grouped into frontend, backend and hosting, the creator's GitHub activity grid, and a link to the playground repository.

**Stack:** HTML and SCSS

**Relevant files**: [/client/src/widgets/01/\*](../../client/src/widgets/01/)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-01.png" alt="Widget 01 in light and dark mode (v2 design)"></a>

<details>
<summary>v1 design</summary>

#### v1

<img src="/docs/screenshots/widget-01_v1.png" alt="Widget 01, v1 design">

</details>

## Features

- Tech stack shown as chips, grouped into Frontend, Backend and Hosting
- GitHub activity grid (light and dark versions of the chart image)
- Link to the playground repository
- Built on the shared card shell like every other widget ([`_card.js`](../../client/src/widgets/_card.js))

#### v1 features (replaced in v2)

- SVG brand icons styled with gradients, in rows that moved on the X-axis with a faded edge
- An animated rotating border around the card (`_border.html`)
