import repoContext from './context';
import { initializeButtonState } from './buttonState';
import initializeTooltips from './tooltip';
const { repoContainer, searchInput } = repoContext;

export default function displayCard(data) {
  const repoCard = repoContainer.querySelector('.repo-card');
  if (repoCard) {
    removePreviousCard();
  }

  setTimeout(
    () => {
      searchInput.placeholder = data.details.url;
      repoContainer.innerHTML = cardHTML(data);
      initializeTooltips();
      initializeButtonState();
    },
    repoCard ? 200 : 0
  );
}

function removePreviousCard() {
  const prevCard = repoContainer.querySelector('.repo-card');
  if (prevCard) {
    prevCard.addEventListener(
      'animationend',
      () => {
        repoContainer.innerHTML = '';
      },
      { once: true }
    );
    prevCard.classList.add('fade-out');
  }
}

function calculateLangStats(languages) {
  const BYTES_PER_LINE = 35;
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
  // Stats for each language
  const stats = Object.entries(languages).map(([language, bytes]) => {
    const lines = Math.round(bytes / BYTES_PER_LINE);
    const percentage = (bytes / totalBytes) * 100;

    return {
      name: language,
      bytes,
      lines,
      percentage,
    };
  });
  return {
    stats,
    totalBytes,
    totalLines: Math.round(totalBytes / BYTES_PER_LINE),
  };
}

function cardHTML(data) {
  const { details, owner } = data;
  const hasLanguages = data.languages && Object.keys(data.languages).length > 0;
  const languages = hasLanguages ? calculateLangStats(data.languages) : null;

  return `
          <div class="repo-card">
            <div class="repo-header">
                <a href="${owner.url}" target="_blank">
                <img class="repo-header--img" src="${owner.avatar}" alt="${owner.username} logo"/>
                </a>
                <div class="repo-header--title">
                    <h2><a href="${details.homepage ? details.homepage : details.url}" target="_blank">${details.name}</a></h2>
                    <a href="${owner.url}" target="_blank">${owner.username}</a>
                </div>
            </div>
            ${details.description ? `<div class="repo-description">${details.description}</div>` : ''}
            <ul class="repo-tags">
                 ${details.topics.map((topic) => `<li class="tag">${topic}</li>`).join('')}
            </ul>
            <div class="repo-stats">
            ${
              details.stars
                ? `<div class="repo-stats--item">
                    <i class="fa-regular fa-star"></i>
                    <span class="repo-stats--item--title">Stars</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${details.stars}</span>
                </div>`
                : ''
            }
            ${
              details.forks
                ? `<div class="repo-stats--item">
                    <i class="fa-solid fa-code-fork"></i>
                    <span class="repo-stats--item--title">Forks</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${details.forks}</span>
                </div>`
                : ''
            }
            ${
              details.watchers
                ? `<div class="repo-stats--item">
                    <i class="fa-regular fa-eye"></i>
                    <span class="repo-stats--item--title">Watchers</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${details.watchers}</span>
                </div>`
                : ''
            }
            ${
              details.updatedAt
                ? `<div class="repo-stats--item">
                    <i class="fa-regular fa-clock"></i>
                    <span class="repo-stats--item--title">Last Updated</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${new Date(details.updatedAt).toLocaleDateString('en-US')}</span>
                </div>`
                : ''
            }
            ${
              details.license
                ? `<div class="repo-stats--item">
                    <i class="fa-regular fa-copyright"></i>
                    <span class="repo-stats--item--title">License</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${details.license.spdx_id}</span>
                </div>`
                : ''
            }
           ${
             details.size
               ? `<div class="repo-stats--item">
                    <i class="fa-solid fa-weight-scale"></i>
                    <span class="repo-stats--item--title">Size</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">${details.size}KB</span>
                </div>`
               : ''
           }
            </div>
            ${
              languages
                ? `
    <div class="repo-languages">
        <h3>Language Breakdown</h3>
        ${languages.stats
          .map(
            (lang, index) =>
              `<div class="language-item">
                <span class="language-name">${lang.name}</span>
                <div class="language-bar"><div class="bar ${index === languages.stats.length - 1 ? ' last-animated' : ''}"
                    style="--final-width: ${lang.percentage}%"></div></div>
                <span class="language-count">${lang.lines} lines <span class="slash">/</span> ${lang.bytes} bytes</span>
                <div class="tooltip" role="tooltip"><strong>${lang.percentage.toFixed(2)}%</strong> of ${languages.totalLines} LOC</div>
            </div>`
          )
          .join('')}
    </div>
`
                : `
    <div class="repo-languages last-animated">
        <h3>Language Breakdown</h3>
        <p class="no-languages"><i class="fa-solid fa-ban"></i> No language data available</p>
    </div>
`
            }
</div>`;
}
