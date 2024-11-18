import marketContext from "./core/context.js";
import { fetchMarketData, fetchCurrencyData, fetchIndividualStockData } from "./core/data.js";
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

    marketContext.stockSearchButton.addEventListener("click", async () => {
        try {
            marketContext.stockSearch.disabled = true;
            marketContext.stockSearchButton.disabled = true;

            const symbol = marketContext.stockSearch.value.toUpperCase().trim();
            if (!symbol) {
                console.log("Please enter a stock symbol");
                marketContext.stockSearch.disabled = false;
                marketContext.stockSearchButton.disabled = false;
                return;
            }

            const existingCard = document.querySelector(`.card[data-symbol="${symbol}"]`);
            if (existingCard) {
                existingCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (existingCard.classList.contains('initial')) {
                    const expandBtn = existingCard.querySelector('.expand-btn');
                    expandBtn.click();
                }

                marketContext.stockSearch.value = "";
                marketContext.stockSearch.disabled = false;
                marketContext.stockSearchButton.disabled = false;
                return;
            }

            const stock = await fetchIndividualStockData(symbol);
            await generateStockCard(stock, 0);
            const newCard = document.querySelector(`.card[data-symbol="${symbol}"]`);
            if (newCard) {
                newCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            marketContext.stockSearch.value = "";
            setTimeout(() => {
                marketContext.stockSearch.disabled = false;
                marketContext.stockSearchButton.disabled = false;
            }, 10000);
        } catch (error) {
            console.error('Error searching for stock:', error);
            marketContext.stockSearch.style.backgroundColor = "red";
        }
    });
    marketContext.stockSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            marketContext.stockSearchButton.click();
        }
    });
    marketContext.stockSearch.addEventListener('input', () => {
        if (marketContext.stockSearch.disabled) {
            console.log("Please wait 10 seconds before searching again");
        }
    });
}

// handle currency search & stocks search