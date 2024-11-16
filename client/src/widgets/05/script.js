import marketContext from "./core/context.js";
import { fetchMarketData, fetchCurrencyData } from "./core/data.js";
import { generateStockCard } from "./core/stockCard.js";
import { initializeMenu } from "./core/menu.js";

export async function initializeScript() {
    const stockData = await fetchMarketData();
    const currencyData = await fetchCurrencyData();
    initializeMenu(stockData, currencyData);

    marketContext.clearLoadingMsg();
    if (marketContext.stockCardGroup && stockData.stocks.length > 0 ) {
        stockData.stocks.forEach((stock, index) => generateStockCard(stock, index));
        marketContext.updateLastUpdated(stockData.lastUpdated);
    }
}