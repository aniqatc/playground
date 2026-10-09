import './style.scss';
import { card, docsUrl } from '../_card';

const numberInput = (n) => `
  <div class="number-input-wrapper">
    <input type="number" inputmode="numeric" placeholder=" " min="1" max="70" maxlength="2" class="lottery-number-input" aria-label="Number ${n}">
    <span class="input-hint megaball-content">Max. 70</span>
    <span class="input-hint powerball-content hidden">Max. 69</span>
  </div>`;

export function getMarkup() {
  return card({
    id: '06',
    title: 'Lottery history',
    tags: '20+ years of drawings',
    color: { w: '#12A4C7', wf: '#16B0D6', won: '#04222B' },
    span: 5,
    docs: docsUrl('06-lottery.md'),
    bodyAttrs: 'data-game="megamillion"',
    footerExtra: `
      <button type="button" class="lottery-reset-btn like-btn" aria-label="Reset lottery results">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5"></path></svg>
        Reset
      </button>`,
    body: `
      <header class="content-header">
        <div class="game-switch" role="group" aria-label="Game">
          <span class="pill" aria-hidden="true"></span>
          <button type="button" class="lottery-switch-link active" data-game="megamillion" aria-pressed="true">Mega Millions</button>
          <button type="button" class="lottery-switch-link" data-game="powerball" aria-pressed="false">Powerball</button>
        </div>
        <div class="game-info">
          <button type="button" class="ghost-btn game-info-btn" aria-expanded="false" aria-controls="lottery-info-mega lottery-info-power" aria-label="Game rules and drawing times" title="Game info">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
          </button>
          <div class="tooltip megaball-content" id="lottery-info-mega" role="region" aria-label="Mega Millions info" inert>
            <p><span class="label">Drawings</span><strong>Tues & Fri @ 11pm ET</strong></p>
            <p><span class="label">Numbers</span>5 numbers <strong>(1–70)</strong> & 1 Mega Ball <strong>(1–25)</strong></p>
            <a href="https://www.megamillions.com" target="_blank" rel="noopener noreferrer" class="tooltip-link" aria-label="Visit official Mega Millions site (opens in a new tab)">Visit official site ↗</a>
          </div>
          <div class="tooltip powerball-content hidden" id="lottery-info-power" role="region" aria-label="Powerball info" inert>
            <p><span class="label">Drawings</span><strong>Mon, Wed & Sat @ 10:59pm ET</strong></p>
            <p><span class="label">Numbers</span>5 numbers <strong>(1–69)</strong> + 1 Powerball <strong>(1–26)</strong></p>
            <a href="https://www.powerball.com" target="_blank" rel="noopener noreferrer" class="tooltip-link" aria-label="Visit official Powerball site (opens in a new tab)">Visit official site ↗</a>
          </div>
        </div>
      </header>

      <div class="content-body">
        <div>
          <h3 class="lottery-title">Did your numbers ever hit the <strong>jackpot?</strong></h3>
          <p class="lottery-search-range">Search range <span class="search-date-start"></span> – <span class="search-date-end"></span></p>
        </div>

        <div class="lottery-input-container" role="group" aria-label="Enter lottery numbers">
          <div class="lottery-main-numbers" role="group" aria-label="Pick 5 numbers">
            ${[1, 2, 3, 4, 5].map(numberInput).join('')}
          </div>
          <div class="lottery-special-wrapper">
            <div class="number-input-wrapper">
              <input type="number" inputmode="numeric" placeholder=" " min="1" max="25" maxlength="2"
                class="lottery-number-input special-ball" id="special-ball-number" aria-label="Special ball">
              <label class="special-ball-label megaball-content" for="special-ball-number">Mega Ball</label>
              <label class="special-ball-label powerball-content hidden" for="special-ball-number">Powerball</label>
            </div>
          </div>
        </div>

        <div class="lottery-actions">
          <button type="button" class="lottery-btn btn-random">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22M18 2l4 4-4 4M2 6h1.9c1.5 0 2.9.9 3.6 2.2M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8M18 14l4 4-4 4"></path></svg>
            Quick pick
          </button>
          <button type="button" class="lottery-btn btn-search">Find matches</button>
        </div>

        <div class="lottery-results">
          <div class="lottery-tabs" role="group" aria-label="Results">
            <button type="button" class="lottery-tab active" aria-pressed="true">Matches</button>
            <button type="button" class="lottery-tab" aria-pressed="false">Stats</button>
          </div>
          <div class="scrollable-container scroll-area">
            <div class="lottery-results-content" aria-live="polite">
              <div class="lottery-locked-message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Search to <strong>unlock</strong> historical results.</span>
              </div>
              <div class="lottery-matches hidden"></div>
              <div class="lottery-stats hidden"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  });
}
