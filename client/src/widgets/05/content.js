import './style.scss';
import { card, docsUrl } from '../_card';

const searchIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>`;

export function getMarkup() {
  return card({
    id: '05',
    title: 'Financial markets',
    tags: 'Twelve Data · Alpha Vantage · Open Exchange · Chart.js',
    color: { w: '#2F9E5B', wf: '#1F7A45', won: '#FFFFFF' },
    span: 7,
    docs: docsUrl('05-fin-market.md'),
    body: `
      <section class="content-head">
        <div class="market-tabs" role="group" aria-label="Market">
          <span class="pill" aria-hidden="true"></span>
          <button type="button" class="stock-btn active" aria-label="View stocks tab">Stocks</button>
          <button type="button" class="currency-btn" aria-label="View currencies tab">Currencies</button>
        </div>
        <label class="input-group stock-search">
          <span class="sr-only-text">Search for a company stock symbol</span>
          <input type="text" placeholder="Search company symbol…" autocomplete="off" class="stock-input" />
          <button type="button" class="stock-search-btn ghost-btn" aria-label="Search for stock">${searchIcon}</button>
        </label>
        <label class="input-group currency-search">
          <span class="sr-only-text">Search for a currency symbol</span>
          ${searchIcon}
          <input type="text" placeholder="Search currency symbol…" autocomplete="off" class="currency-input" />
        </label>
        <button type="button" class="expandAll-btn" aria-label="Expand all market cards" title="Expand all">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"></path></svg>
        </button>
      </section>
      <section class="content-body">
        <div class="stock-container">
          <div class="card-group scroll-area loading">
            <span>Loading today's popular stocks…</span>
          </div>
        </div>
        <div class="currency-container hidden">
          <div class="card-group scroll-area"></div>
        </div>
      </section>
      <section class="content-footer">
        <span class="short-description">Top Actively Traded</span>
        <span class="timestamp-wrapper">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4M12 16h.01"></path></svg>
          <span class="timestamp"></span>
        </span>
      </section>
    `,
  });
}
