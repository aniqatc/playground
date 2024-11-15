import marketContext from "./core/context.js";
import { fetchMarketData } from "./core/data.js";
import { toggleCardState, clearLoadingMsg, generateStockCard } from "./core/stockCard.js";

export async function initializeScript() {
    const data = await fetchMarketData();
    clearLoadingMsg();
    marketContext.updateLastUpdated(data.lastUpdated);

    if (marketContext.stockCardGroup && data.stocks) {
        data.stocks.forEach((stock, index) => generateStockCard(stock, index));
    }


    marketContext.expandAllButton.addEventListener("click", () => {
        const cards = marketContext.stockCardGroup.querySelectorAll(".card");
        const allExpanded = Array.from(cards).every(card => !card.classList.contains("initial"));

        if (allExpanded) {
            cards.forEach(card => { toggleCardState(card); });
        } else {
            cards.forEach(card => {
                if (card.classList.contains("initial")) {
                    toggleCardState(card);
                }
            })
        }
    });
}

