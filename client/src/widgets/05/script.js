import marketContext from "./core/context.js";
import { fetchMarketData } from "./core/data.js";
import { toggleCardState, clearLoadingMsg, generateStockCard } from "./core/stockCard.js";
import { createChart } from "./core/charts";

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
            cards.forEach(card => {
                const graphDiv = card.querySelector(".card-body--graph");
                if (graphDiv.chart) {
                    graphDiv.chart.destroy();
                    graphDiv.chart = null;
                }
                graphDiv.innerHTML = "";
                toggleCardState(card);
            });
        } else {
            cards.forEach(async card => {
                if (card.classList.contains("initial")) {
                    toggleCardState(card);

                    const graphDiv = card.querySelector(".card-body--graph");
                    graphDiv.innerHTML = '<canvas></canvas>';

                    const symbol = card.querySelector(".company-symbol").textContent;
                    const stock = data.stocks.find(s => s.symbol === symbol);

                    if (stock) {
                        graphDiv.chart = await createChart(card, stock);
                    }
                }
            })
        }
    });
}

