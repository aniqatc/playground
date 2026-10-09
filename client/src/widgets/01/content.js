import './style.scss';
import { card, docsUrl } from '../_card';

const stack = [
  { label: 'Frontend', items: ['HTML', 'JavaScript', 'Sass', 'Tailwind', 'PostCSS', 'Autoprefixer', 'Webpack'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose'] },
  { label: 'Hosting', items: ['Vercel', 'Heroku'] },
];

const stackMarkup = stack
  .map(
    (group) => `
      <div class="stack-group">
        <span class="stack-label">${group.label}</span>
        <div class="stack-items">
          ${group.items.map((item) => `<span class="stack-chip">${item}</span>`).join('')}
        </div>
      </div>`
  )
  .join('');

export function getMarkup() {
  return card({
    id: '01',
    title: 'About',
    tags: 'the stack behind every widget',
    color: { w: '#8A8A94', wf: 'var(--ink)', won: 'var(--card)' },
    span: 12,
    docs: docsUrl('01-about.md'),
    body: `
      <div class="about-grid">
        <div class="about-stack">
          <p class="about-intro">
            A showcase featuring a variety of <strong>independent widgets</strong> with different
            functionalities, utilizing both frontend and backend technologies.
          </p>
          ${stackMarkup}
        </div>
        <div class="about-activity">
          <div class="activity-head">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            <span>GitHub activity</span>
            <a href="https://github.com/aniqatc" target="_blank">@aniqatc ↗</a>
          </div>
          <a href="https://github.com/aniqatc" target="_blank" class="gh-chart">
            <img
              src="https://ghchart.rshah.org/211e1f/aniqatc"
              alt="aniqatc's GitHub contribution chart"
              class="gh-image block dark:hidden"
            />
            <img
              src="https://ghchart.rshah.org/494949/aniqatc"
              alt="aniqatc's GitHub contribution chart"
              class="gh-image hidden dark:block"
            />
          </a>
          <a href="https://github.com/aniqatc/playground" target="_blank" class="repo-link">
            <i class="fa-solid fa-code-branch" aria-hidden="true"></i> View playground repository
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    `,
  });
}
