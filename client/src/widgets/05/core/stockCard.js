import marketContext from './context.js';
import { createChart, destroyChart } from './charts';

const trendUp = 'M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6';
const trendDown = 'M22 17 13.5 8.5 8.5 13.5 2 7M16 17h6v-6';

const money = (value) => parseFloat(value).toFixed(2);

function stockCardHTML(stock, expanded) {
  const isUp = stock.change > 0;
  const sign = isUp ? '+' : '';

  return `
    <button type="button" class="card-head expand-btn" aria-expanded="${expanded}" aria-label="${stock.symbol}: show or hide details and the 7-day chart">
      <span class="logo-wrapper"><img src="${stock.logo}" alt="" loading="lazy" /></span>
      <span class="card-heading--name">
        <span class="company-symbol">${stock.symbol}</span>
        <span class="company-name">${stock.name}</span>
      </span>
      <span class="card-heading--price">
        <span class="company-price--value">$${money(stock.price)}</span>
        <span class="company-change-value">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${isUp ? trendUp : trendDown}"></path></svg>
          ${sign}${money(stock.changePercent)}%
        </span>
      </span>
      <svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
    </button>
    <div class="card-body" ${expanded ? '' : 'inert'}>
      <div>
        <dl class="card-body--details">
          <div><dt>Volume</dt><dd>${parseInt(stock.volume).toLocaleString()}</dd></div>
          <div><dt>Change</dt><dd>${sign}${money(stock.change)}</dd></div>
          <div><dt>Open</dt><dd>${money(stock.open)}</dd></div>
          <div><dt>Close</dt><dd>${money(stock.close)}</dd></div>
          <div><dt>Exchange</dt><dd>${stock.exchange}</dd></div>
          <div><dt>Year low</dt><dd>${money(stock.yearLow)}</dd></div>
          <div><dt>Year high</dt><dd>${money(stock.yearHigh)}</dd></div>
          <div><dt>Website</dt><dd><a href="${stock.website}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${stock.name} website (opens in a new tab)">Visit ↗</a></dd></div>
        </dl>
        <div class="card-body--chart">
          <span class="chart-label">7-day trend</span>
          <div class="card-body--graph"></div>
        </div>
      </div>
    </div>`;
}

async function generateStockCard(stock, index, userReq = false) {
  const { stockCardGroup } = marketContext;
  const expanded = index === 0;
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', stock.change > 0 ? 'positive' : 'negative');
  cardEl.setAttribute('data-symbol', stock.symbol);
  if (!expanded) cardEl.classList.add('initial');

  cardEl.innerHTML = stockCardHTML(stock, expanded);

  if (index === 0) {
    stockCardGroup.prepend(cardEl);
    await showChart(cardEl, stock);
  } else {
    stockCardGroup.append(cardEl);
  }
  if (userReq === true) {
    marketContext.updateLastUpdated(stock.lastUpdated);
  }

  cardEl.querySelector('.expand-btn').addEventListener('click', async () => {
    toggleCardState(cardEl);
    marketContext.scrollToElement(cardEl);

    if (cardEl.classList.contains('initial')) {
      hideChart(cardEl);
    } else {
      await showChart(cardEl, stock);
    }
  });
}

async function showChart(cardEl, stock) {
  const graphDiv = cardEl.querySelector('.card-body--graph');
  graphDiv.innerHTML = '<canvas></canvas>';
  graphDiv.chart = await createChart(cardEl, stock);
}

function hideChart(cardEl) {
  const graphDiv = cardEl.querySelector('.card-body--graph');
  destroyChart(cardEl);
  graphDiv.chart = null;
  graphDiv.innerHTML = '';
}

// `.initial` means collapsed. The button content no longer gets rewritten here;
// the chevron rotates with CSS based on aria-expanded.
function toggleCardState(cardEl) {
  const expandBtn = cardEl.querySelector('.expand-btn');
  const isCollapsed = cardEl.classList.toggle('initial');
  expandBtn.setAttribute('aria-expanded', String(!isCollapsed));
  // inert while collapsed so the hidden "Visit" link isn't a Tab stop
  cardEl.querySelector('.card-body').inert = isCollapsed;
}

export { toggleCardState, generateStockCard, showChart, hideChart };
