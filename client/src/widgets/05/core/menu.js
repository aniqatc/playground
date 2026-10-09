import marketContext from './context.js';
import { toggleCardState, showChart, hideChart } from './stockCard';
import { generateCurrencyCards } from './currencyCard';

const {
  stockButton,
  currencyButton,
  expandAllButton,
  stockTab,
  currencyTab,
  stockCardGroup,
  currencyCardGroup,
  scrollToElement,
} = marketContext;

export function initializeMenu(stockData, currencyData) {
  stockButton.addEventListener('click', () => {
    initializeStockBtn(stockData);
  });
  currencyButton.addEventListener('click', () => {
    initializeCurrencyBtn(currencyData);
  });
  expandAllButton.addEventListener('click', () => {
    initializeExpandBtn(stockData);
  });
}

function initializeExpandBtn(stockData) {
  if (!stockTab.classList.contains('hidden')) {
    const cards = stockCardGroup.querySelectorAll('.card');
    const allExpanded = Array.from(cards).every((card) => !card.classList.contains('initial'));
    expandAllButton.setAttribute('aria-pressed', String(!allExpanded));

    cards.forEach(async (card) => {
      const isCollapsed = card.classList.contains('initial');
      if (allExpanded) {
        hideChart(card);
        toggleCardState(card);
      } else if (isCollapsed) {
        toggleCardState(card);
        const stock = stockData.stocks.find((s) => s.symbol === card.dataset.symbol);
        if (stock) await showChart(card, stock);
      }
    });
  } else if (!currencyTab.classList.contains('hidden')) {
    // currencies: switch between the full list and a compact list (names hidden)
    const compact = currencyCardGroup.classList.toggle('compact');
    expandAllButton.setAttribute('aria-pressed', String(!compact));
  }
}

function initializeStockBtn(stockData) {
  if (stockTab.classList.contains('hidden')) {
    currencyButton.classList.remove('active');
    stockButton.classList.add('active');
    stockButton.setAttribute('aria-pressed', 'true');
    currencyButton.setAttribute('aria-pressed', 'false');
    currencyTab.classList.add('hidden');
    stockTab.classList.remove('hidden');
    marketContext.updateLastUpdated(stockData.lastUpdated);
    marketContext.updateDescription('stocks');
    scrollToElement(stockTab);
  }
}

function initializeCurrencyBtn(currencyData) {
  if (currencyTab.classList.contains('hidden')) {
    currencyButton.classList.add('active');
    stockButton.classList.remove('active');
    currencyButton.setAttribute('aria-pressed', 'true');
    stockButton.setAttribute('aria-pressed', 'false');
    if (currencyCardGroup.innerHTML === '') {
      generateCurrencyCards(currencyData);
    }
    stockTab.classList.add('hidden');
    currencyTab.classList.remove('hidden');
    marketContext.updateLastUpdated(currencyData.lastUpdated);
    marketContext.updateDescription('currencies');
    scrollToElement(currencyTab);
  }
}
