import repoContext from './context';
import { initializeButtonState } from './buttonState';
const { repoContainer, searchInput } = repoContext;

// Up to three named languages, everything else is grouped as "Other"
const LANGUAGE_COLORS = ['#E0AA00', 'var(--wf)', '#B4532A', 'var(--muted)'];

export default function displayCard(data) {
  const repoCard = repoContainer.querySelector('.repo-card');
  if (repoCard) {
    removePreviousCard();
  }

  setTimeout(
    () => {
      searchInput.placeholder = data.details.url.replace(/^https?:\/\/github\.com\//, '');
      repoContainer.innerHTML = cardHTML(data);
      initializeButtonState();
    },
    repoCard ? 200 : 0
  );
}

function removePreviousCard() {
  const prevCard = repoContainer.querySelector('.repo-card');
  if (prevCard) {
    prevCard.classList.add('fade-out');
  }
}

// Text from the GitHub API (descriptions, names) goes into innerHTML, so escape it
function escapeHTML(text = '') {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function calculateLangStats(languages) {
  const BYTES_PER_LINE = 35;
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
  const stats = Object.entries(languages)
    .map(([language, bytes]) => ({
      name: language,
      bytes,
      lines: Math.round(bytes / BYTES_PER_LINE),
      percentage: (bytes / totalBytes) * 100,
    }))
    .sort((a, b) => b.bytes - a.bytes);

  // keep the top three, fold the rest into "Other"
  const top = stats.slice(0, 3);
  const rest = stats.slice(3);
  if (rest.length) {
    top.push({
      name: 'Other',
      bytes: rest.reduce((sum, lang) => sum + lang.bytes, 0),
      lines: rest.reduce((sum, lang) => sum + lang.lines, 0),
      percentage: rest.reduce((sum, lang) => sum + lang.percentage, 0),
    });
  }

  return { stats: top, totalLines: Math.round(totalBytes / BYTES_PER_LINE) };
}

const shortDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

function languagesHTML(languages) {
  if (!languages) {
    return `<p class="no-languages last-animated">No language data available</p>`;
  }

  const segments = languages.stats
    .map(
      (lang, i) => `<span class="bar${i === languages.stats.length - 1 ? ' last-animated' : ''}"
        style="width: ${lang.percentage}%; background: ${LANGUAGE_COLORS[i]}"
        title="${escapeHTML(lang.name)}: ${lang.lines.toLocaleString()} lines / ${lang.bytes.toLocaleString()} bytes (${lang.percentage.toFixed(2)}% of ${languages.totalLines.toLocaleString()} LOC)"></span>`
    )
    .join('');

  const legend = languages.stats
    .map(
      (lang, i) =>
        `<li><span class="swatch" style="background: ${LANGUAGE_COLORS[i]}"></span>${escapeHTML(lang.name)} ${Math.round(lang.percentage)}%</li>`
    )
    .join('');

  const label = languages.stats.map((lang) => `${lang.name} ${Math.round(lang.percentage)}%`).join(', ');

  return `
    <div class="repo-languages">
      <div class="language-bar" role="img" aria-label="Languages: ${escapeHTML(label)}">${segments}</div>
      <ul class="language-legend">${legend}</ul>
    </div>`;
}

function cardHTML(data) {
  const { details, owner } = data;
  const hasLanguages = data.languages && Object.keys(data.languages).length > 0;
  const languages = hasLanguages ? calculateLangStats(data.languages) : null;
  const meta = [escapeHTML(owner.username), details.license?.spdx_id].filter(Boolean).join(' · ');

  return `
    <div class="repo-card">
      <div class="repo-header">
        <a href="${owner.url}" target="_blank" class="repo-header--avatar">
          <img class="repo-header--img" src="${owner.avatar}" alt="${escapeHTML(owner.username)}" crossorigin="anonymous" />
        </a>
        <div class="repo-header--title">
          <h3><a href="${details.homepage || details.url}" target="_blank">${escapeHTML(details.name)}</a></h3>
          <a href="${owner.url}" target="_blank" class="repo-meta">${meta}</a>
        </div>
      </div>
      ${details.description ? `<p class="repo-description">${escapeHTML(details.description)}</p>` : ''}
      <dl class="repo-stats">
        <div><dt>Stars</dt><dd>${(details.stars || 0).toLocaleString()}</dd></div>
        <div><dt>Forks</dt><dd>${(details.forks || 0).toLocaleString()}</dd></div>
        <div><dt>Updated</dt><dd>${details.updatedAt ? shortDate(details.updatedAt) : '—'}</dd></div>
      </dl>
      ${languagesHTML(languages)}
    </div>`;
}
