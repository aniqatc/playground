import marketContext from "./core/context.js";
import { fetchMarketData, fetchCurrencyData } from "./core/data.js";
import { generateStockCard } from "./core/stockCard.js";
import { initializeMenu } from "./core/menu.js";
import { initializeStockSearch } from "./core/stockSearch";
import { initializeCurrencySearch } from "./core/currencySearch";

export async function initializeScript() {
    const stockData = await fetchMarketData();
    const currencyData = await fetchCurrencyData();
    initializeMenu(stockData, currencyData);
    marketContext.clearLoadingMsg();

    if (marketContext.stockCardGroup && stockData.stocks.length > 0 ) {
        stockData.stocks.forEach((stock, index) => generateStockCard(stock, index));
    }

    marketContext.updateLastUpdated(stockData.lastUpdated);
    initializeStockSearch(stockData);
    initializeCurrencySearch(currencyData);

    // Windows Scrollbar Issue
    const { stockCardGroup, currencyCardGroup } = marketContext;
    const cardGroups = [stockCardGroup, currencyCardGroup];
    cardGroups.forEach(group => {
        if (navigator.platform.includes('Win')) {
            group.classList.add('windows-scrollbar');
        }
    })
}
